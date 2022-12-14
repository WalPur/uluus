import { Box, Container } from '@mui/material';
import { Subtitle, Text14 } from '../global-styles';

import {Helmet} from "react-helmet";

function AdvertsRules() {
	const data = [
		'Приложение № 2 к Пользовательскому соглашению',
		'Сайта Uluus.ru, размещенному в сети Интернет по адресу: https://uluus.ru/privacy-policy',
		'Дата публикации: 18.08.2022',
		'Последняя редакция: 18.08.2022',
		'Правила размещения объявлений',
		'Администрация предоставляет Пользователю возможность использования бесплатных Сервисов Сайта Uluus.ru, на условиях и с соблюдением требований Пользовательского соглашения (https://uluus.ru/privacy-policy), всех приложений к нему, а также иных применимых документов Администрации.',
		'Перед подачей объявления каждый Пользователь обязан внимательно ознакомиться с настоящими Правилами Сайта Uluus.ru, которые нужны для того, чтобы обеспечить равные условия для всех Пользователей.',
		'Настоящие Правила являются открытым и общедоступным документом. Правила могут быть изменены и/или дополнены Администрацией в одностороннем порядке без какого-либо специального уведомления (согласия) Пользователя.',
		'Администрация вправе проверять объявления на соответствие действующим Правилам, Пользовательскому соглашению и его приложениям. Объявления, нарушающие указанные документы, удаляются.',
		'Сайт Uluus.ru является справочно-информационным материалом, не имеющим в качестве основной цели продвижение товаров на рынке. Объявления, публикуемые на Сайте, не являются рекламой товаров и услуг.',
		'1. Общие правила',
		'1.1. Не подавайте одно и то же объявление повторно (т. е. о предложении одного и того же товара/услуги), в том числе в разных категориях. Опубликованные объявления, которые незначительно отличаются друг от друга по содержанию, картинке или номеру телефона, но предлагают одну и ту же услугу или товар, так же признаются повторными и могут быть удалены.',
		'1.2. Не подавайте объявления, которые могут дискредитировать физических или юридических лиц.',
		'1.3. Не размещайте объявления о продаже запрещенных товаров (см. раздел Правил "Категории товаров, по которым ни при каких условиях не должны публиковаться объявления на Uluus.ru").',
		'1.4. Не используйте ссылки на социальные сети и другие сайты, не приглашайте вступить в группы в мессенджерах.',
		'1.5. Выбирайте для объявления наиболее подходящую категорию/подкатегорию/действие.',
		'1.6. В объявлении не должно быть непристойного или оскорбительного содержания (эротика, нецензурные выражения и т. д.).',
		'1.7. Не указывайте персональные и контактные данные других лиц.',
		'1.8. Не размещайте информацию о продаже нескольких товаров/услуг в одном объявлении.',
		'1.9. Запрещено бесплатно размещать коммерческие объявления и рекламу юридических лиц. Под коммерческим объявлением понимается объявление с рекламой товаров, услуг и иной деятельности, использующихся для систематического извлечения прибыли (напр. "продаю наушники в наличии", "привожу запчасти на заказ", "продаю платье все размеры", "продаю SIM-карты", "выдаю займы", "выкуп телефонов", "скупка боя рогов" и т. д.), независимо от формы собственности (физ. лицо, ИП или юр. лицо).',
		'1.10. Объявления в категории "Недвижимость” могут публиковать:',
		`собственник объекта недвижимости или его законный представитель;\nлицо, имеющее договор социального найма объекта недвижимости или его законный представитель;\nюридическое лицо или индивидуальный предприниматель, заключившее с собственником или его законным представителем договор о продаже объекта недвижимости или иной договор, не противоречащий законодательству РФ.`,
		'1.11. Объявления о продаже одной/нескольких личных SIM-карт должны сопровождаться словами "с переоформлением договора". Объявления о продаже SIM-карт без переоформления, корпоративных SIM-карт, подключении к тарифным планам считаются коммерческими и могут публиковаться только при наличии договора коммерческого представительства по обслуживанию абонентов оператора сотовой связи, дилерского или субдилерского соглашения по заключению абонентских договоров.',
		'1.12. Объявления с рекламой кредитов, ипотечных, займов, ломбардов, вкладов и любых других банковских, страховых и финансовых услуг должны содержать полное наименование лица, оказывающего услугу, наименование кредитной организации (банка) и номер ее лицензии.',
		'1.13. Объявления с рекламой финансовой услуги, содержащие хотя бы одно ее условие, должны содержать все остальные условия, определяющие полную фактическую стоимость для заемщика и влияющие на нее.',
		'1.14. Объявления с рекламой стимулирующего мероприятия (акции со снижением цен на товары, распродажами, скидками, конкурсы, игры, пари, вручение подарков или призов, получение дисконтных карт и т. п.) должны содержать сроки проведения такого мероприятия и источник информации об организаторе такого мероприятия, о правилах его проведения, количестве призов или выигрышей по результатам такого мероприятия, сроках, месте и порядке их получения.',
		'1.15. Объявления с рекламой биологически активных добавок (БАД) и пищевых добавок должны сопровождаться предупреждением о том, что объект рекламирования не является лекарственным средством и не должны создавать впечатление о том, что они являются лекарственными средствами и (или) обладают лечебными свойствами.',
		'1.16. Объявления с рекламой лекарства, отпускаемого без рецепта или медицинского изделия, должны содержать предупреждение о наличии противопоказаний и необходимости ознакомиться с инструкцией.',
		'1.17. Объявления с рекламой детского питания должны содержать информацию о возрастных ограничениях и необходимости консультации специалиста.',
		'1.18. Для подачи объявлений о доставке товаров в Якутск необходимо в объявлении указывать наименование юридического лица или ФИО ИП, номер ОГРН или ОГРНИП.',
		'1.19. Запрещено редактировать текст объявления таким образом, при котором меняется его смысл или объект продажи/покупки/обмена.',
		'1.20. Запрещено публиковать объявления о вакансиях, найме на работу, а также о поиске работы и сведения о трудовой деятельности.',
		'1.21. Запрещено использовать в объявлении слова для поисковой оптимизации (теги).',
		'1.22. Запрещено указывать в поле "Номер телефона" набор цифр, не являющихся номером телефона.',
		'1.23. Запрещено публиковать объявления о продаже и доставке товаров, оказании услуг, если для получения товара или услуги необходимо внести частичную или полную предоплату (аванс).',
		'1.24. Администрация не удаляет и не редактирует объявления по просьбе.',
		'1.25. Администрация вправе редактировать Объявление, размещенное Пользователем, в том числе добавлять/редактировать фотографии, добавлять геолокацию путем проставления метки на карте Сайта и иные действия, не искажающие смысл и объект Объявления. При этом обязательное согласие Пользователя на такие действия не требуется.',
		'1.26. Запрещается предоставлять ложную, неточную, некорректную или вводящую в заблуждение информацию о местонахождении товара или объекта недвижимости путем перемещения метки на карте.',
		'1.27. При размещении объявлений об оказании услуг или о видах деятельности, подлежащих лицензированию, в содержании объявления должны быть указаны: наименование вида деятельности, номер и дата выдачи лицензии, полное наименование лица, предоставляющего указанные услуги.',
		'1.28. Запрещено размещать на фотографиях, товарные знаки, фирменные наименования и коммерческие обозначения, а также любую иную рекламную информацию (в том числе названия сайтов, никнеймы и названия мессенджеров), за исключением случаев, когда подобное размещение согласовано с Администрацией Сайта, а также размещать на сайте Uluus.ru, полученные из других ресурсов и/или имеющие товарные знаки, фирменные наименования и коммерческие обозначения, а также любую иную рекламную информацию (в том числе названия сайтов, никнеймы и названия мессенджеров) других ресурсов. В указанных случаях, Администрация имеет право в одностороннем порядке удалить объявление.',
		'1.29. Запрещено размещать фотографии и видеоматериалы, не соответствующие предмету, тематике, тексту или категории объявления.',
		'2. Категории товаров и услуг, по которым ни при каких условиях не должны публиковаться объявления на Uluus.ru',
		'2.1. Любые предметы, запрещенные к продаже, либо изъятые из гражданского оборота по законодательству Российской Федерации, включая любое оружие военного назначения, боеприпасы военного назначения и технику военного назначения, взрывчатые, ядовитые, отравляющие и другие опасные вещества и предметы, радиоактивные материалы, порнографические материалы, а также наркотические средства и психотропные вещества.',
		'2.2. Краденое имущество.',
		'2.3. Курительные смеси и соли.',
		'2.4. Государственные награды.',
		'2.5. Поддельные денежные знаки и поддельные знаки почтовой оплаты.',
		'2.6. Акции и иные ценные бумаги.',
		'2.7. Иностранная валюта и иные валютные ценности (за исключением их купли-продажи для нумизматических целей), монеты и банкноты РФ, находящиеся в обращении.',
		'2.8. Радиоэлектронные и специальные технические средства в соответствии с Перечнем, утвержденным Постановлением Правительства РФ от 02.02.98 №111.',
		'2.9. Поддельные, действующие или имеющие силу государственные удостоверения личности, знаки, пропуска, разрешения, сертификаты и лицензии.',
		'2.10. Базы данных, содержащие персональные данные.',
		'2.11. Материалы, содержащие государственную, банковскую или коммерческую тайну.',
		'2.12. Материалы, нарушающие тайну частной жизни, посягающие на честь, достоинство и деловую репутацию граждан и юридических лиц.',
		'2.13. Оружие и комплектующие - прицелы, патроны, приклады и т. д., а также копии коллекционного оружия, любое холодное (в т. ч. ножи, за исключением кухонных, перочинных и канцелярских), охотничье и пневматическое оружие.',
		'2.14. Рыболовные сети, электроудочки, электроманки.',
		'2.15. Предметы с фашистской/нацистской символикой, кроме представляющих историческую и/или коллекционную ценность.',
		'2.16. Алкогольные напитки и самогонные аппараты.',
		'2.17. Нелицензионное (пиратское) программное обеспечение.',
		'2.18. Взломанные игровые приставки.',
		'2.19. Документы, подтверждающее право на управление транспортными средствами (водительское удостоверение) и документы на транспортное средство.',
		'2.20. Лекарства, отпускаемые по рецепту.',
		'2.21. Сигареты, электронные сигареты, вейпы, табак, табачные изделия и курительные принадлежности, в том числе трубки, кальяны, уголь, сигаретная бумага, зажигалки и другие подобные товары.',
		'2.22. Помощь в получении и оформление справок, выписок, выдаваемых медицинскими учреждениями, а также любых документов, подлежащих оформлению государственными органами.',
		'2.23. Помощь и оформление документов для получения кредита и исправления кредитной истории.',
		'2.24. Объявления об оказании медицинских услуг.',
		'2.25. Объявления с рекламой услуг по подготовке и написанию квалификационных работ, научных докладов об основных результатах подготовленных научно-квалификационных работ (диссертаций) и иных работ, предусмотренных государственной системой научной аттестации или необходимых для прохождения обучающимися промежуточной или итоговой аттестации (курсовые и дипломные работы в том числе).',
		'2.26. Животные или растения, занесенных в Красную книгу Российской Федерации, либо охраняемых международными договорами, их продуктов, частей либо дериватов (кровь, моча, мускус, желчь, различные железы, панты, сувениры и предметы бытового назначения, изготовленные из них, медикаменты и парфюмерия животного и растительного происхождения).',
		'2.27. Аккаунты и/или данные аккаунта в социальных сетях (в том числе имени пользователя, данные учётных данных для входа, значков пользователей, пароли), включая, но не ограничиваясь, аккаунты в instagram.com, facebook.com, twitter.com, vk.com, ok.com.',
		'3. Основные причины удаления объявлений, внесения имен пользователей и телефонных номеров в черный список',
		'3.1. Размещение одного и того же объявления повторно (о продаже одного и того же товара/услуги), независимо от того, размещены ли они в разных категориях.',
		'3.2. Размещение объявлений о несуществующих товарах или неоказываемых услугах.',
		'3.3. При поступлении неоднократных жалоб других пользователей.',
		'3.4. Наличие в объявлении/имени пользователя (в заголовке, тексте или на фотографиях) эротического, порнографического, нецензурного, экстремистского характера.',
		'3.5. Наличие в объявлении информации, не соответствующей действительности.',
		'3.6. Размещение объявления в неправильной категории.',
		'3.7. Размещение объявлений о сомнительных способах получения дохода, в том числе в сети интернет (напр., "Зарегистрируйтесь на нашем сайте и начните зарабатывать").',
		'3.8. Размещение объявлений о рекламе интернет-ресурсов (порталов, форумов, сайтов знакомств и т.д.).',
		'3.9. Размещение объявлений о предоставлении услуг по замене лицензионного ПО, установке программного обеспечения (напр. игр) на игровых приставках ("прошивка") и иных устройствах, если это влечет за собой нарушение законодательства РФ.',
		'3.10. Размещение объявлений об интим- и эскорт-услугах.',
		'3.11. Размещение объявлений на религиозную и оккультную тематику.',
		'3.12. Размещение объявлений о выдаче кредитов (в т. в. ипотечных), займов и иных финансовых услугах, не содержащих полного наименования организации, названия банка и номера его лицензии (требование Федерального закона "О рекламе").',
		'3.13. Размещение объявлений о продаже детского питания без указания информации о возрастных ограничениях применения таких продуктов и предупреждения о необходимости консультаций специалистов (требование Федерального закона "О рекламе").',
		'3.14. Размещение бесплатных объявлений с рекламой коммерческой (предпринимательской) деятельности. Под коммерческой деятельностью подразумевается деятельность, направленная на систематическое извлечение прибыли от пользования имуществом, продажи товаров, выполнения работ или оказания услуг, независимо от формы собственности (юридическое лицо, ИП, физическое лицо).',
		'3.15. Набор текста объявления или большей его части заглавными буквами (caps lock).',
		'3.16. Размещение объявлений о продаже/покупке/обмене животных или растений, занесенных в Красную книгу Российской Федерации, либо охраняемых международными договорами, их продуктов, частей либо дериватов (кровь, моча, мускус, желчь, различные железы, панты, сувениры и предметы бытового назначения, изготовленные из них, медикаменты и парфюмерия животного и растительного происхождения).',
		'Обратите внимание на то, что во всех случаях нарушения правил размещения, Администрация вправе удалить как бесплатные, так и платные объявления БЕЗ ВОЗВРАТА оплаты за услуги, а учетная запись пользователя может быть заблокирована.',
		'Если ваше объявление или учетную запись заблокировали, это значит, что вы нарушили правила размещения объявлений.',
		'Администрация не несет ответственности за содержание объявлений.',
		'Администрация оставляет за собой право на дополнение и обновление существующих правил.',
		'Если вы считаете, что блокировка произошла по ошибке, свяжитесь со службой поддержки по контактным данным в разделе "Контактные данные администрации".',
		'4. Контактные данные администрации',
		'Телефон: 8(914) 262 53-62',
		'WhatsApp: 8(914) 262 53-62',
		'E-mail: EIS.1@yandex.ru',
		'Режим работы: пн-вс с 9:00 до 21:00',
	];
	return (
		<Box id='adverts-rules' sx={{
			padding: '33px 0',
			display: 'flex',
			flexDirection: 'column',
			gap: '33px',
		}}>
			<Helmet>
                <meta charSet="utf-8" />
                <title>Uluus.ru - правила подачи заявки</title>
                <meta name="description" content="Приложение № 2 к Пользовательскому соглашению сайта Uluus.ru, размещенному в сети Интернет по адресу: https://uluus.ru/privacy-policy" />
            </Helmet>
			<Container maxWidth='lg'>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '30px',
				}}>
					<Subtitle sx={{
						fontWeight: 700
					}}>
						Правила подачи объявлений
					</Subtitle>
					<Box sx={{
						display: 'flex',
						flexDirection: 'column',
						gap: '20px'
					}}>
						{data.map((item, index) => (
							<Text14 key={index} sx={{ whiteSpace: 'pre-line' }}>
								{item}
							</Text14>
						))}
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default AdvertsRules;