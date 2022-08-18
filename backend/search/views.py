import abc

from elasticsearch_dsl import Q
from rest_framework.pagination import LimitOffsetPagination
from rest_framework.views import APIView
from rest_framework.response import Response

from advert.documents import (
    RentDocument,
    CarDocument,
    FoodDocument,
    HomeDocument,
    JobsDocument,
    ServiceDocument,
    RemontDocument
)
from advert.serializers import (
    advert,
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
    serializer_class = advert.Serializer
    document_class = CarDocument

    def generate_q_expression(self, query):
        return Q(
            {
                "bool": {
                    "must": {
                        "multi_match": {
                            "query": query,
                            "fields": [
                                "name",
                                "description",
                                "user_name",
                            ],
                            "fuzziness":'auto'
                        }
                    },
                    "filter" : {
                        "term": {"slug": "car"}
                    }
                },
            }
        )


class SearchFood(PaginatedElasticSearchAPIView):
    serializer_class = advert.Serializer
    document_class = FoodDocument

    def generate_q_expression(self, query):
        return Q(
            {
                "bool": {
                    "must": {
                        "multi_match": {
                            "query": query,
                            "fields": [
                                "name",
                                "description",
                                "user_name",
                            ],
                            "fuzziness":'auto'
                        }
                    },
                    "filter" : {
                        "term": {"slug": "food"}
                    }
                },
            }
        )


class SearchHome(PaginatedElasticSearchAPIView):
    serializer_class = advert.Serializer
    document_class = HomeDocument

    def generate_q_expression(self, query):
        return Q(
            {
                "bool": {
                    "must": {
                        "multi_match": {
                            "query": query,
                            "fields": [
                                "name",
                                "description",
                                "user_name",
                            ],
                            "fuzziness":'auto'
                        }
                    },
                    "filter" : {
                        "term": {"slug": "home"}
                    }
                },
            }
        )



class SearchJobs(PaginatedElasticSearchAPIView):
    serializer_class = advert.Serializer
    document_class = JobsDocument

    def generate_q_expression(self, query):
        return Q(
            {
                "bool": {
                    "must": {
                        "multi_match": {
                            "query": query,
                            "fields": [
                                "name",
                                "description",
                                "user_name",
                            ],
                            "fuzziness":'auto'
                        }
                    },
                    "filter" : {
                        "term": {"slug": "jobs"}
                    }
                },
            }
        )


class SearchService(PaginatedElasticSearchAPIView):
    serializer_class = advert.Serializer
    document_class = ServiceDocument

    def generate_q_expression(self, query):
        return Q(
            {
                "bool": {
                    "must": {
                        "multi_match": {
                            "query": query,
                            "fields": [
                                "name",
                                "description",
                                "user_name",
                            ],
                            "fuzziness":'auto'
                        }
                    },
                    "filter" : {
                        "term": {"slug": "service"}
                    }
                },
            }
        )


class SearchRent(PaginatedElasticSearchAPIView):
    serializer_class = advert.Serializer
    document_class = RentDocument

    def generate_q_expression(self, query):
        return Q(
            {
                "bool": {
                    "must": {
                        "multi_match": {
                            "query": query,
                            "fields": [
                                "name",
                                "description",
                                "user_name",
                            ],
                            "fuzziness":'auto'
                        }
                    },
                    "filter" : {
                        "term": {"slug": "rent"}
                    }
                },
            }
        )


class SearchRemont(PaginatedElasticSearchAPIView):
    serializer_class = advert.Serializer
    document_class = RemontDocument

    def generate_q_expression(self, query):
        return Q(
            {
                "bool": {
                    "must": {
                        "multi_match": {
                            "query": query,
                            "fields": [
                                "name",
                                "description",
                                "user_name",
                            ],
                            "fuzziness":'auto'
                        }
                    },
                    "filter" : {
                        "term": {"slug": "remont"}
                    }
                },
            }
        )
