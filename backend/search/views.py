import abc

from django.http import HttpResponse
from elasticsearch_dsl import Q
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.views import APIView

from advert.documents import (
    RentDocument,
    CarDocument,
    FoodDocument,
    HomeDocument,
    JobsDocument,
    ServiceDocument,
)
from advert.serializers import (
    car,
    food,
    home,
    jobs,
    rent,
    service,
)


class PaginatedElasticSearchAPIView(APIView, LimitOffsetPagination):
    serializer_class = None
    document_class = None

    @abc.abstractmethod
    def generate_q_expression(self, query):
        """This method should be overridden
        and return a Q() expression."""

    def get(self, request, query):
        q = self.generate_q_expression(query)
        search = self.document_class.search().query(q)
        response = search.execute()

        print(f'Found {response.hits.total.value} hit(s) for query: "{query}"')

        results = self.paginate_queryset(response, request, view=self)
        serializer = self.serializer_class(results, many=True)
        uluuses = request.GET.get("uluus", "")
        if uluuses != "":
            uluuses = set(map(int, request.GET.get("uluus", "").split(',')))
            new_data = []
            for obj in serializer.data:
                if uluuses.intersection(set(obj["uluus"])):
                    new_data.append(obj)
            return self.get_paginated_response(new_data)
        else:
            return self.get_paginated_response(serializer.data)


class SearchCar(PaginatedElasticSearchAPIView):
    serializer_class = car.CarSerializer
    document_class = CarDocument

    def generate_q_expression(self, query):
        return Q(
            "multi_match",
            query=query,
            fields=[
                "name",
                "description",
                "user_name",
            ],
            fuzziness="auto",
        )


class SearchFood(PaginatedElasticSearchAPIView):
    serializer_class = food.FoodSerializer
    document_class = FoodDocument

    def generate_q_expression(self, query):
        return Q(
            "multi_match",
            query=query,
            fields=[
                "name",
                "description",
                "user_name",
            ],
            fuzziness="auto",
        )


class SearchHome(PaginatedElasticSearchAPIView):
    serializer_class = home.HomeSerializer
    document_class = HomeDocument

    def generate_q_expression(self, query):
        return Q(
            "multi_match",
            query=query,
            fields=[
                "name",
                "description",
                "user_name",
            ],
            fuzziness="auto",
        )


class SearchJobs(PaginatedElasticSearchAPIView):
    serializer_class = jobs.JobsSerializer
    document_class = JobsDocument

    def generate_q_expression(self, query):
        return Q(
            "multi_match",
            query=query,
            fields=[
                "name",
                "description",
                "user_name",
            ],
            fuzziness="auto",
        )


class SearchService(PaginatedElasticSearchAPIView):
    serializer_class = service.ServiceSerializer
    document_class = ServiceDocument

    def generate_q_expression(self, query):
        return Q(
            "multi_match",
            query=query,
            fields=[
                "name",
                "description",
                "user_name",
            ],
            fuzziness="auto",
        )


class SearchRent(PaginatedElasticSearchAPIView):
    serializer_class = rent.RentSerializer
    document_class = RentDocument

    def generate_q_expression(self, query):
        return Q(
            "multi_match",
            query=query,
            fields=[
                "name",
                "description",
                "user_name",
            ],
            fuzziness="auto",
        )
