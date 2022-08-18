import { Box, Container } from '@mui/material';

import { Subtitle, Text14 } from '../global-styles';

function PrivacyPolicy() {
	const data = [
		'Настоящее Пользовательское соглашение (далее - «Соглашение») определяет права и обязанности между ООО «Театр эстрады “Саха концерт”» (далее – «Администрация») и Пользователем, возникающие при использовании Сайтом упомянутом в настоящем Соглашении с момента акцепта Пользователем настоящего Соглашения в соответствии условиями настоящего Соглашения.',
		'Перед началом пользования Сайта, Пользователь обязан ознакомиться с настоящим Соглашением, а также со всеми применимыми правилами и иными документами, которые являются неотъемлемой частью настоящего соглашения:',
		'Настоящее Соглашение адресовано неопределенному кругу лиц и является публичной офертой в соответствии с пунктом 2 статьи 437 Гражданского кодекса Российской Федерации.',
		'Настоящее Соглашение заключается в особом порядке: путем акцепта настоящего Соглашения, содержащего все существенные условия Соглашения, без подписания сторонами. Настоящее Соглашение имеет юридическую силу в соответствии с положениями действующего Гражданского кодекса Российской Федерации и является равносильным договору, составленному в письменной форме и подписанному Сторонами.',
		'Безусловным принятием (акцептом) настоящего Пользовательского соглашения (оферты) в соответствии со статьей 438 Гражданского кодекса Российской Федерации является совершение Пользователем любых действий, направленных на использование Сайтом. Акцепт оферты означает безоговорочное принятие всех ее условий без каких-либо изъятий или ограничений на условиях присоединения.',
		'В случае несогласия с каким-либо условием настоящего Соглашения или иных применимых документов Администрации, Пользователь не вправе использовать Сайт Администрации',
		'1. Термины и определения',
		'В настоящем Пользовательском соглашении нижеуказанные термины и определения толкуются в следующем значении:',
		'a. Администрация — Общество с ограниченной ответственностью «Театр эстрады “Саха концерт”».',
		'b. Сайт – сайт расположенный в сети Интернет по адресу https://uluus.ru/. Все права на указанные сайты принадлежат ООО «Театр эстрады “Саха концерт”».',
		'c. Пользователь — физическое лицо обладающее полной дееспособностью, акцептовавшее настоящее Соглашение.',
		'd. Контент – размещенные на Сайте элементы дизайна, иллюстрации, графические изображения, фотографии, скрипты, тексты, видео, музыка, звуки и другие объекты, являющиеся результатом интеллектуальной деятельности или не являющиеся таковыми, права на которые принадлежат Администрации, Пользователю или иным лицам.',
		'2. Предмет Соглашения',
		'2.1. Администрация на условиях настоящего Соглашения предлагает воспользоваться доступным функционалом Сайта. Пользователь обязуется использовать Сайт в строгом соответствии с условиями настоящего Соглашения и любых приложений, и документов к нему, как существующих, так и разработанных в будущем.',
		'2.2. Право использования Сайта предоставляется Пользователю на бесплатной основе.',
		'3. Общие положения',
		'3.1. Администрация предоставляет доступ к Сайте посредством персонального компьютера и различных мобильных устройств Пользователя, как существующим в настоящее время, так и разработанным в будущем.',
		'3.2. Предоставляемый Сайт в любой момент может измениться, дополниться, обновиться, менять форму и характер функциональных возможностей без предварительного уведомления Пользователя, в связи с чем их использование предлагается в режиме «как есть» (as is), в соответствии с общепринятым в международной практике принципом, т.е. том виде и объеме, в каком они предоставляются Администрацией в момент обращения Пользователя к Сайте.',
		'Администрация вправе при необходимости по собственному усмотрению прекратить (временно или окончательно) предоставление Сайта (или каких-либо отдельных функций) всем Пользователям в целом или отдельному Пользователю, в частности, без предварительного уведомления. Администрация не несет ответственности за несоответствие результатов использования функционала Сайтом ожиданиям Пользователя.',
		'3.3. В соответствии с принципами разумности и добросовестности, Администрация предполагает, что Пользователь:',
		'3.3.1. обладает всеми необходимыми правами, позволяющими ему использовать Сайт;',
		'3.3.2. указывает о себе достоверную информацию, необходимую для получения доступа к Сайте либо их отдельному функционалу;',
		'3.3.3. осознает, что часть информации, размещенной Пользователем о себе на Сайте, может становиться доступной другим Пользователям, а также может быть распространена Пользователями, в том числе с использованием сети Интернет.',
		'3.4. Администрация не осуществляет регистрацию Пользователей.',
		'В связи с этим, Пользователь обязан ознакомиться со всеми документами Администрации, регламентирующими порядок регистрации, хранения и обработки персональных данных Пользователя.',
		'3.5. Пользователь самостоятельно несет ответственность за все действия (а также их последствия)',
		'3.6. Настоящее Соглашение является открытым и общедоступным документом. Соглашение может быть изменено и/или дополнено Администрацией в одностороннем порядке без какого-либо специального уведомления (согласия) Пользователя. Действующая редакция Соглашения размещена в сети Интернет по следующим адресам: https://uluus.ru/privacy-policy',
		'3.7. Администрация рекомендует Пользователям регулярно проверять условия настоящего Соглашения на предмет его изменения и/или дополнения. Продолжение использования Сайтом после внесения изменений и/или дополнений в настоящее Соглашение будет означать принятие и согласие Пользователя с такими изменениями и/или дополнениями.',
		'3.8. Пользователь имеет право отказаться от принятия условий настоящего Соглашения, а также изменений и/или дополнений к настоящему Соглашению, что расценивается как отказ Пользователя от использования Сайтом. В этом случае Пользователь обязан незамедлительно прекратить использовать Сайт любым способом.',
		'3.9. Обращения, предложения и претензии физических и юридических лиц к Администрации в связи с настоящим Соглашением и всеми вопросами по функционированию Сайта, нарушениями прав и интересов третьих лиц при его использовании, а также для запросов уполномоченных законодательством Российской Федерации лиц должны быть направлены на почтовый адрес ООО «Театр эстрады “Саха концерт”», указанный в п. «10» настоящего Соглашения.',
		'4. Контент',
		'4.1. Пользователь несет персональную ответственность за любой Контент или иную информацию, которые он загружает или иным образом доводит до всеобщего сведения (публикует) на Сайте или с его помощью. Пользователь не имеет права загружать, передавать или публиковать Контент на Сайте, если он не обладает соответствующими правами на совершение таких действий, приобретенными или переданными ему в соответствии с законодательством Российской Федерации. При обнаружении нарушения исключительных прав правообладателя необходимо немедленно сообщить об этом Администрации по адресу предусмотренному разделом 10 настоящего Соглашения.',
		'4.2. Пользователь понимает и соглашается с тем, что Администрация может, но не обязана, просматривать Сайт на наличие запрещенного Контента и может удалять или перемещать (без предупреждения) любой Контент по своему личному усмотрению, по любой причине или без причины, включая нарушение положений настоящего Соглашения, законодательства Российской Федерации и/или возможное нарушение прав, причинение вреда или угрозы безопасности Администрации, других Пользователей или третьих лиц.',
		'4.3. Если иное явным образом не установлено в настоящем Соглашении, ничто в настоящем Соглашении не может быть рассмотрено как передача исключительных прав на Контент Сайта.',
		'4.4. Пользователь понимает и соглашается с тем, что при работе Сайтов/Мобильных приложений может потребоваться копирование (воспроизведение) и/или переработка Контента Пользователя Администрацией для соответствия техническим требованиям того или иного Сайта/Мобильного приложения.',
		'4.5. Пользователь гарантирует, что размещение им на Сайте Контента, не нарушает чьих-либо прав и законных интересов. В случае поступления претензий третьих лиц в связи с нарушением условий настоящего Соглашения в части размещения информации и/или Контента третьих лиц, Администрация вправе осуществить передачу в рамках, допустимых законом, доступной ему контактной информации Пользователя лицам, обратившимся с претензиями, в целях урегулирования возникших разногласий.',
		'5. Обязанности и права Пользователя',
		'5.1. Пользователь вправе:',
		'осуществлять пользование Сайтом и его функционалом на условиях, предусмотренных настоящим Соглашением, а также иными специальными документами (правилами, инструкциями, соглашениями, договорами) Администрации.',
		'5.2. Пользователь обязуется:',
		'действовать исключительно в соответствии с действующим законодательством Российской Федерации, настоящим Соглашением и иными специальными документами, регулирующими правила пользования функционалом Сайта;',
		'периодически знакомиться с текстом настоящего Пользовательского Соглашения, а также со всеми специальными документами Администрации в отношении Сайта.',
		'5.3. Пользователю категорически запрещается:',
		'5.3.1. Вводить в заблуждение Администрацию, Пользователей и иных лиц относительно своей личности путем использования чужих персональных данных;',
		'5.3.2. загружать, хранить, публиковать (доводить до всеобщего сведения), распространять и предоставлять доступ или иным образом использовать любую информацию, которая:',
		'содержит персональные и иные данные, позволяющие идентифицировать физическое лицо, включая номер телефона, в том числе мобильного, место работы, учебы, пребывания, жительства и иные данные без соответствующего письменного разрешения лица, чьи данные используются;',
		'содержит угрозы, дискредитирует, оскорбляет, порочит честь и достоинство или деловую репутацию, или нарушает неприкосновенность частной жизни других Пользователей или третьих лиц;',
		'нарушает права несовершеннолетних лиц;',
		'является вульгарной или непристойной, содержит порнографические изображения и тексты или сцены сексуального характера с участием несовершеннолетних;',
		'содержит контент с кровью, внутренностями, телесными повреждениями, отходами жизнедеятельности людей или животных;',
		'содержит неприемлемый контент, связанный с любыми формами оскорбления, надругательства, насилия и жестокого обращения, событиями и явлениями деликатного характера, включая, но не ограничиваясь: нанесение вреда здоровью и жизни, смерть, стихийные бедствия, техногенные катастрофы, места совершения преступлений, места происшествия аварий, общественные беспорядки и т.д.;',
		'содержит описание средств и способов суицида, любое подстрекательство к его совершению;',
		'пропагандирует и/или способствует разжиганию расовой, религиозной, этнической ненависти или вражды, пропагандирует фашизм или идеологию расового превосходства;',
		'содержит экстремистские материалы;',
		'пропагандирует преступную деятельность или содержит советы, инструкции или руководства по совершению преступных действий;',
		'содержит информацию ограниченного доступа, включая, но не ограничиваясь, государственной и коммерческой тайной, информацией о частной жизни третьих лиц, персональные данные;',
		'содержит рекламу или описывает привлекательность употребления наркотических веществ, в том числе «цифровых наркотиков» (звуковых файлов, оказывающих воздействие на мозг человека за счет бинауральных ритмов), информацию о распространении наркотиков, рецепты их изготовления и советы по употреблению;',
		'носит мошеннический характер;',
		'содержит рекламу конкурирующих услуг, Сервисов и web-проектов, в любых формах;',
		'содержит объявления о знакомствах;',
		'содержит бессмысленные сообщения, приветствия-прощания, осуществлять личную переписку и общение на частные темы между несколькими посетителями публично;',
		'а также нарушает иные документы Администрации, права и интересы граждан и юридических лиц или требования законодательства Российской Федерации.',
		'5.3.3. незаконно загружать, хранить, публиковать, распространять и предоставлять доступ или иным образом использовать интеллектуальную собственность Пользователей и третьих лиц без соответствующего разрешения по форме предусмотренной действующим законодательством Российской Федерации;',
		'5.3.4. размещать сообщения с чрезмерным количеством грамматических ошибок;',
		'5.3.5. размещать сообщения с жаргонными словами и фразами;',
		'5.3.6. размещать объявления о продаже/покупке любого оружия (в том числе коллекционного, холодного, охотничьего и пневматического), его комплектующих (прицелы, патроны, приклады и т.д.), а также реплик оружия;',
		'5.3.7. размещать объявления о продаже сигарет, электронных сигарет, табака, табачных изделий и курительных принадлежностей, в том числе трубок, кальянов, угля, сигаретной бумаги, зажигалок и других подобных товаров;',
		'5.3.8. использовать программное обеспечение и осуществлять действия, направленные на нарушение нормального функционирования Сайта;',
		'5.3.9. загружать, хранить, публиковать, распространять и предоставлять доступ или иным образом использовать вирусы, трояны и другие вредоносные программы;',
		'5.3.10. использовать без специального на то разрешения Администрации автоматизированные скрипты (программы) для сбора информации на Сайте и/или взаимодействия с Сайтом, их функционалом;',
		'5.3.11. размещать коммерческую и политическую рекламу вне специальных разделов Сайта, установленных Администрацией;',
		'5.3.12. размещать любую другую информацию, которая, по мнению Администрации, является нежелательной, не соответствует целям создания Сайта, ущемляет интересы Пользователей или по другим причинам является нежелательной для размещения на Сайте.',
		'6. Реклама на сайте',
		'6.1. Пользователь понимает и соглашается с тем, что Сайт может содержать рекламу и что наличие рекламы является необходимым условием пользования Сайтом.',
		'6.2. Администрация вправе вести учет активности Пользователя на Сайте и, с учетом этой информации, производить для Пользователя показ рекламной информации, в том числе таргетированной. Указанная информация рассматривается как закрытая и не подлежит разглашению Администрацией, Пользователями и третьими лицами.',
		'6.3. Администрация несет ответственность за содержание рекламы в случаях, предусмотренных Федеральным законом Российской Федерации «О рекламе».',
		'7. Ограничение ответственности. Гарантии',
		'7.1. Пользователь самостоятельно и в полном объеме несет ответственность за все действия, совершенные им при использовании Сайтм в соответствии с законодательством Российской Федерации, включая ответственность за размещение информации на Сайте и связанное с этим нарушение прав третьих лиц.',
		'7.2. Администрация предоставляет техническую возможность использования Сайтом Пользователями, не участвует в формировании содержания Контента, сообщений, публикаций и иных материалов Пользователей, не контролирует и не несет ответственности за действия или бездействие любых лиц в отношении использования Сайтом или формирования и использования содержания Контента, сообщений, публикаций и иных материалов Пользователей на Сайте.',
		'7.3. В информационной системе Сайта и его программном обеспечении отсутствуют технические решения, осуществляющие автоматические цензуру и контроль действий и информационных отношений Пользователей по использованию Сайта. Администрация не осуществляет и не имеет технической возможности осуществлять предварительную модерацию и цензуру информации и Контента, размещаемого Пользователем, и не несет ответственности за его содержание.',
		'7.4. Администрация прилагает все возможные усилия для обеспечения нормальной работоспособности Сайта, однако не несет ответственности за неисполнение или ненадлежащее исполнение обязательств по настоящему Соглашению, а также за прямые и косвенные убытки Пользователя, включая упущенную выгоду и возможный ущерб, возникший в том числе в результате:',
		'7.4.1. неправомерных действий пользователей сети Интернет, направленных на нарушение информационной безопасности и/или нормального функционирования Сайта.',
		'7.4.2. отсутствия (невозможности установления, прекращения и пр.) Интернет-соединений между сервером Пользователя и сервером Администрации;',
		'7.4.3. проведения государственными и муниципальными органами, а также иными организациями мероприятий в рамках оперативно-розыскных мероприятий;',
		'7.4.4. установления государственного регулирования (или регулирования иными организациями) хозяйственной деятельности коммерческих организаций в сети Интернет и/или установления указанными субъектами разовых ограничений, затрудняющих или делающих невозможным исполнение настоящего Соглашения;',
		'7.4.5. других случаев, связанных с действиями (бездействием) пользователей сети Интернет и/или других субъектов, направленными на ухудшение общей ситуации с использованием сети Интернет и/или компьютерного оборудования, существовавшей на момент заключения настоящего Соглашения.',
		'7.5. Администрация не несет ответственности за нарушение Пользователем настоящего Соглашения и оставляет за собой право по своему собственному усмотрению, а также при получении информации от других пользователей либо третьих лиц о нарушении Пользователем настоящего Соглашения, изменять (модерировать) или удалять любую публикуемую Пользователем информацию и Контент, нарушающие запреты, установленные настоящим Соглашением, приостанавливать, ограничивать или прекращать доступ Пользователя ко всем или к любому из разделов или функционалу Сайта в любое время по любой причине или без объяснения причин, с предварительным уведомлением или без такового.',
		'7.6. Администрация не несет ответственности за действия Пользователей и за взаимоотношения между Пользователями. Администрация ни при каких обстоятельствах не может быть привлечена в качестве Стороны по спорам между Пользователями.',
		'7.7. Администрация не осуществляет контроль за дееспособностью и правоспособностью Пользователей.',
		'7.8. Администрация не несет ответственности за возможные противоправные действия Пользователя или третьих лиц при использовании Сайта.',
		'7.9. Администрация вправе уведомлять Пользователя о развитии Сайта с использованием их функционала (уведомления).',
		'8. Споры и претензии',
		'8.1. Все споры и разногласия, связанные с исполнением настоящего Соглашения, решаются путем переговоров. Стороны устанавливают обязательный досудебный порядок.',
		'8.2. Пользователь и/или третьи лица, чьи права и законные интересы нарушены обязаны направить претензию Администрации в электронном виде на почту uluus@inbox.ru',
		'8.3. В случае невозможности урегулирования споров и разногласий путем переговоров, спор подлежит разрешению в соответствии с законодательством Российской Федерации в суде по месту нахождения Администрации.',
		'9. Заключительные положения',
		'9.1. Настоящее Соглашение представляет собой договор между Пользователем и Администрацией относительно порядка использования Сайта и заменяет собой все предыдущие соглашения между Пользователем и Администрацией.',
		'9.2. Настоящее Соглашение является бессрочным.',
		'9.3. В случае, если какое-либо из положений настоящего Соглашения окажется недействительным в силу закона или вступившего в законную силу решения суда, оно будет считаться исключенным из настоящего Соглашения, а остальные положения настоящего Соглашения сохраняют силу.',
		'9.4. Настоящее Соглашение регулируется и толкуется в соответствии с законодательством Российской Федерации. Вопросы, не урегулированные Соглашением, подлежат разрешению в соответствии с законодательством Российской Федерации.',
		'9.5. Ничто в Соглашении не может пониматься как установление между Пользователем и Администрацией агентских отношений, отношений товарищества, отношений по совместной деятельности, отношений личного найма, либо каких-то иных отношений, прямо не предусмотренных Соглашением.',
		'10. Адрес Администрации',
		'Общество с ограниченной ответственностью «Театр эстрады “Саха концерт”». Адрес: 677010, Республика Саха (Якутия), город Якутск, улица Якова Потапова дом 19, 2 квартира',
	];
	return (
		<Box id='privacy-policy' sx={{
			padding: '33px 0',
			display: 'flex',
			flexDirection: 'column',
			gap: '33px',
		}}>
			<Container maxWidth='lg'>
				<Box sx={{
					display: 'flex',
					flexDirection: 'column',
					gap: '30px',
				}}>
					<Subtitle sx={{
						fontWeight: 700
					}}>
						Пользовательское соглашение
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

export default PrivacyPolicy;