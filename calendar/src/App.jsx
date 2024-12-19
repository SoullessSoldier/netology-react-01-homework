import dayjs from "dayjs";
import "dayjs/locale/ru";
import weekday from 'dayjs/plugin/weekday';
import localeData from 'dayjs/plugin/localeData'
import updateLocale from 'dayjs/plugin/updateLocale'
import Calendar from "./components/Calendar";
import "@/assets/styles/main.css"


function App() {
  dayjs.locale("ru");
  dayjs.extend(localeData);
  dayjs.extend(weekday)
  dayjs.extend(updateLocale)
  dayjs.updateLocale('ru', {
    weekdaysShort: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]
  })
  const date = dayjs();
  return (
    <>
      <Calendar date={date} />
    </>
  )
}

export default App
