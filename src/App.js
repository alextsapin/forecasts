import './App.css';

function App() {
    return (
        <div className="container mt-5">
            <div class="table-responsive">
                <table class="table table-bordered table-striped">
                    <thead class="table-dark">
                        <tr>
                            <th>Дата</th>
                            <th>Страх</th>
                            <th>Действие</th>
                            <th>Подтвердилось?</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Позапрошлая неделя</td>
                            <td>Испугался что в почтовом ящике повестка или извещение</td>
                            <td>Проверил</td>
                            <td>Нет</td>
                        </tr>

                        <tr>
                            <td>Позарошлая неделя</td>
                            <td>Испугался пожара в загородном доме</td>
                            <td>Проверял</td>
                            <td>Нет</td>
                        </tr>

                        <tr>
                            <td>Прошлая неделя</td>
                            <td>Испугался, что из-за грозы перегорит котел.</td>
                            <td>Не проверял</td>
                            <td>Нет</td>
                        </tr>

                        <tr>
                            <td>Прошлая неделя</td>
                            <td>Испугался пожара в загородном доме</td>
                            <td>Не проверял</td>
                            <td>Нет</td>
                        </tr>

                        <tr>
                            <td>Воскресенье</td>
                            <td>Испугался, что пока меня нет кто-то заберется.</td>
                            <td>Проверял</td>
                            <td>Нет</td>
                        </tr>

                        <tr>
                            <td>Среда</td>
                            <td>Испугался, что на меня подадут в суд.</td>
                            <td>Проверял</td>
                            <td>Нет</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App;
