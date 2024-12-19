import dayjs from "dayjs";
import "dayjs/locale/ru.js"; // Для того, чтобы понедельник был нулевым днем недели, а не воскресенье
import weekday from "dayjs/plugin/weekday.js"; // Плагин для работы с номерами дней недели
import utc from "dayjs/plugin/utc.js"; // Для работы приведения объекта датавремени к нулевому часовому поясу, костыль!
import objectSupport from "dayjs/plugin/objectSupport.js"; // Для парсинга в виде объекта
import customParseFormat from "dayjs/plugin/customParseFormat.js"; // Продвинутый парсер
dayjs.locale("ru");
dayjs.extend(weekday);
dayjs.extend(utc);
dayjs.extend(objectSupport);
dayjs.extend(customParseFormat);

const getMonthCalendar = (date = "") => {
  const isValid = dayjs(date, "YYYY-MM-DD", true).isValid();
  if (isValid) {
    const [y, M, d] = date.split("-").map((item) => parseInt(item));
    const _date = dayjs.utc({ y, M: M - 1, d });
    const firstDateOfCurrMonth = _date
      .set("date", 1)
      .set("hour", 0)
      .set("minute", 0);
    const firstMonday =
      firstDateOfCurrMonth.weekday() === 0
        ? firstDateOfCurrMonth
        : firstDateOfCurrMonth.weekday(7); // 7 это "следующий" понедельник в днях недели dayjs

    const lastDateOfCurrMonth = _date
      .set("month", _date.month() + 1)
      .set("date", 0);
    const lastSunday =
      lastDateOfCurrMonth.weekday() === 6
        ? lastDateOfCurrMonth
        : lastDateOfCurrMonth.weekday(-1); // 6 это воскресенье в днях недели dayjs
    const difference = lastSunday.diff(firstMonday, "day") + 1;
    const numberOfFullWeeks = difference / 7;

    const res = [];

    // Работаем с первой неделей
    const firstWeekArr = [];
    if (firstDateOfCurrMonth.weekday() !== 0) {
      const firstMon = firstDateOfCurrMonth.weekday(0);
      for (let i = 0; i < 7; i++) {
        const date = firstMon.add(i, "day");
        const tempObject = {
          day: date.date(),
          dateISO: date.toISOString(),
          isCurrent: date.month() !== firstMon.month(),
        };
        firstWeekArr.push(tempObject);
      }
      res.push([...firstWeekArr]);
    }

    // Работаем с полными неделями

    for (let n = 0; n < numberOfFullWeeks; n++) {
      const tempRow = [];
      for (let i = 0; i < 7; i++) {
        const date = firstMonday.add(7 * n + i, "day");
        const tempObject = {
          day: date.date(),
          dateISO: date.toISOString(),
          isCurrent: true,
        };
        tempRow.push(tempObject);
      }
      res.push(tempRow);
    }
    // Попробуем получить последнюю неделю...
    const lastWeekArr = [];
    if (lastDateOfCurrMonth.weekday() !== 6) {
      const lastMon = lastDateOfCurrMonth.weekday(0); // Понедельник этой неполной недели
      for (let i = 0; i < 7; i++) {
        const date = lastMon.add(i, "day");
        const tempObject = {
          day: date.date(),
          dateISO: date.toISOString(),
          isCurrent: date.month() === lastMon.month(),
        };
        lastWeekArr.push(tempObject);
      }
      res.push([...lastWeekArr]);
    }

    return res;
  }
  return [];
};

export { getMonthCalendar };
