<h1>Требования к разработке информационной системы</h1>
<h2>Общий курс работы</h2>
<table>
<th>Релиз</th>
<td>1.0</td>
<tr>
<th>Эпик</th>
<td>Разработка минимального жизнеспособного продукта</td>
<tr>
<th>Статус</th>
<td>Проект</td>
<tr>
<th>Владелец продукта</th>
<td>Додобаев Р.Р.</td>
<tr>
<th>Разработчики</th>
<td>Соколов М.Д.</td>
</table>
<h2>Предпосылки и согласованность со стратегией</h2>
<body>
Учреждение проводит работу с воспитательной средой в школах и СПО на всей территории РФ. Это большой объем данных, который нужно из «сырого» вида приводить в читаемый понятный отчет. Проще всего это сделать с помощью инструментов визуализации. Планируется создать инструмент, который будет представлять актуальную информацию о реализации проекта в регионах в удобном и понятном формате. Оценить успех разработки можно с помощью аналитики. В исходной точке имеем набор вручную сформированных таблиц MS Excel по разным ответвлениям реализации проекта
</body>
<h2>Разбор похожих продуктов</h2>
<ul>
<li>
Интерактивная карта города Красноярска – геоинформационная система, представленная на портале администрации города Красноярска. Представляет собой картографическое приложение с набором слоев, отображающих административный ресурс города Красноярска: от зеленых насаждений, до размещения рекламных конструкций.


![Image](https://github.com/users/Aldirion/projects/1/assets/33082369/99a111f1-c613-49e1-9d5a-aee04592609d)
</li>
<li>
Интерактивная карта ресурса «Национальные проекты России» – ГИС приложение, показывающее отдельные реализованные элементы по каждому отдельно взятому национальному проекту. По сравнению с предыдущим аналогом более отзывчивый интерфейс и лучшая визуализация.


![Image](https://github.com/users/Aldirion/projects/1/assets/33082369/78c790e9-d23a-4190-a644-b0dba0489398)


</li>
<li>
Интерактивная карта профилактической деятельности «Национального центра информационного противодействия терроризму и экстремизму в образовательной среде и сети Интернет» – инструмент визуализации работы проекта по проведению профилактических мероприятий в учреждениях образования. Решает похожую задачу, однако набор данных ограничен полем деятельности центра. В случае с разрабатываемой системой мониторинга потребуется подробная навигация по ветвлениям проекта.


![Image](https://github.com/users/Aldirion/projects/1/assets/33082369/e6fd94f1-4bb4-473a-8a71-03053e88e4b7)


</li>

<h2>Пользовательские истории</h2>
<table>
<th>№</th><th>Название истории</th><th>Описание</th><th>Приоритет</th><th>Заметки</th>
<tr>
<th>1</th>
<td>
Карта регионов России</td>
<td>Как директор, который использует информационную систему для работы над стратегией развития проекта в регионах, я хочу, чтобы у меня был визуальный инструмент, который бы показывал состояние реализации проекта в регионах, выделяя слабые и сильные регионы цветом</td>
<td>Высокий</td>
<td></td>
<tr>
<th>2</th>
<td>
Детальная информация по региону</td>
<td>Как главный эксперт, который несет ответственность за реализацию проекта в регионе, я хочу, чтобы у меня была детальная информация по показателям проекта в регионе, размещенная на одном экране в соответствии с приоритетом показателей </td>
<td>Высокий</td>
<td></td>
<tr>
<th>3</th>
<td>
Список учреждений</td>
<td>Как специалист по аналитической деятельности я хочу иметь возможность обращаться к списку учреждений, чтобы видеть, в каких учреждениях возникают проблемы с реализацией проекта</td>
<td>Средний</td>
<td></td>
<tr>
<th>4</th>
<td>
Страница учреждения</td>
<td>Как специалист по аналитической деятельности я хочу иметь возможность обращаться к конкретному образовательному учреждению, чтобы видеть детальную информацию о состоянии реализации проекта по показателям</td>
<td>Средний</td>
<td></td>
<tr>
<th>5</th>
<td>
Страница федерального округа</td>
<td>Как специалист аналитического отдела, который курирует несколько регионов, я хочу иметь возможность видеть сводную информацию о реализации проекта по прикрепленным регионам</td>
<td>Низкий</td>
<td></td>
<tr>
<th>6</th>
<td>
Страница учреждения</td>
<td>Как эксперт, я хочу иметь возможность видеть сводную информацию об учреждении, непосредственно в котором я работаю. Эта информация должна включать в себя предстоящие мероприятия, текущие отчетности и общую информацию об учреждении</td>
<td>Высокий</td>
<td></td>
<tr>
<th>7</th>
<td>
Форма сбора данных</td>
<td>Как эксперт я хочу иметь возможность подавать отчетность о реализации проекта в учреждении, непосредственно в котором я работаю, унифицированно, регулярно в рамках одного приложения</td>
<td>Высокий</td>
<td></td>
<tr>
<th>8</th>
<td>
Текущие мониторинги</td>
<td>Как специалист по аналитической деятельности, я хочу иметь возможность наблюдать за текущими мониторингами и отслеживать заполнение мониторингов экспертами, работающими непосредственно в учреждениях</td>
<td>Средний</td>
<td></td>
<tr>
<th>9</th>
<td>
База данных</td>
<td>-*- Необходимая часть, к которой пользователи напрямую не могут обращаться -*-</td>
<td>Высокий</td>
<td></td>
</table>
