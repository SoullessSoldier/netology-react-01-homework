import PropTypes from "prop-types";

function CalendarRow({ row }) {
  const currentDate = new Date();
  const currentDateISO = currentDate.toISOString().split("T")[0];
  return (
    <tr>
      {row.map((item, index) => (
        <td
          key={index}
          className={`${
            item.dateISO.split("T")[0] === currentDateISO
              ? "ui-datepicker-today"
              : ""
          } ${!item.isCurrent ? "ui-datepicker-other-month" : ""}`}
        >
          {item.day}
        </td>
      ))}
    </tr>
  );
}

CalendarRow.propTypes = {
  row: PropTypes.array.isRequired,
};

export default CalendarRow;
