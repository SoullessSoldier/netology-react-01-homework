import dayjs from "dayjs";
import PropTypes from "prop-types";
import { arrMonthes } from "@/utils/dateUtils";
import { capitalize } from "@/utils/stringUtils";
import { getMonthCalendar } from "@/utils/calendarHelper";
import CalendarRow from "@/components/CalendarRow";

function Calendar({ date }) {
  dayjs.locale("ru");
  const dateMoment = date;
  const _month = arrMonthes[dateMoment.month()];
  const weekdays = dayjs.weekdaysShort();
  const dateStr = date.format("YYYY-MM-DD");
  const calendar = getMonthCalendar(dateStr);

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {capitalize(dateMoment.format("dddd"))}
        </div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">
            {dateMoment.date()}
          </div>
          <div className="ui-datepicker-material-month">{_month}</div>
          <div className="ui-datepicker-material-year">{dateMoment.year()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {capitalize(dateMoment.format("MMMM"))}
          </span>
          &nbsp;
          <span className="ui-datepicker-year">{dateMoment.year()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          {[...Array(7)].map((_, i) => (
            <col
              key={i}
              className={`${
                [5, 6].includes(i) ? "ui-datepicker-week-end" : ""
              }`}
            />
          ))}
        </colgroup>
        <thead>
          <tr>
            {[...Array(7)].map((_, i) => (
              <th key={i} scope="col" title={weekdays[i]}>
                {weekdays[i]}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {calendar.map((item, index) => (
            <CalendarRow key={index} row={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Calendar.propTypes = {
  date: PropTypes.instanceOf(dayjs).isRequired,
};

export default Calendar;
