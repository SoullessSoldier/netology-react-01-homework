import {describe,it,expect, expectTypeOf} from "vitest";
import { getMonthCalendar } from "@/utils/calendarHelper";

describe("Positive test of getMonthCalendar for date '2024-03-08'", () => {
    const date = "2024-03-01";
    const foo = getMonthCalendar(date);
    it(`output should be an 5-element array of 7-element arrays for getMonthCalendar(${date})`, () => {
        expectTypeOf(foo).toBeArray;
        expect(foo.length).toBe(5);
        expect(foo.every(item => item.length === 7)).toBeTruthy()
    });
    it(`'day' property for first week's 1st element of getMonthCalendar(${date}) should be 26`, () => {
        expect(foo[0][0].day).toBe(26);
    });
    it(`'isCurrent' property for first week's 1st element of getMonthCalendar(${date}) should be false`, () => {
        expect(foo[0][0].isCurrent).toBeFalsy();
    });
    it(`'dateISO' property for first week's 1st element of getMonthCalendar(${date}) should contain 2024-02-26`, () => {
        expect(foo[0][0].dateISO).toContain("2024-02-26");
    });
    it(`'day' property for last week's 7th element of getMonthCalendar(${date}) should be 31`, () => {
        expect(foo[4][6].day).toBe(31);
    });
    it(`'isCurrent' property for last week's 7th element of getMonthCalendar(${date}) should be true`, () => {
        expect(foo[4][6].isCurrent).toBeTruthy();
    });
    it(`'dateISO' property for last week's 7th element of getMonthCalendar(${date}) should contain 2024-03-31`, () => {
        expect(foo[4][6].dateISO).toContain("2024-03-31");
    });
})

describe("Positive test of getMonthCalendar for date '2021-02-23'", () => {
    const date = "2021-02-23";
    const foo = getMonthCalendar(date);
    it(`output should be an 4-element array of 7-element arrays for getMonthCalendar(${date})`, () => {
        expectTypeOf(foo).toBeArray;
        expect(foo.length).toBe(4);
        expect(foo.every(item => item.length === 7)).toBeTruthy()
    });
    it(`'day' property for first week's 1st element of getMonthCalendar(${date}) should be 1`, () => {
        expect(foo[0][0].day).toBe(1);
    });
    it(`'isCurrent' property for first week's 1st element of getMonthCalendar(${date}) should be false`, () => {
        expect(foo[0][0].isCurrent).toBeTruthy();
    });
    it(`'dateISO' property for first week's 1st element of getMonthCalendar(${date}) should contain 2021-02-01`, () => {
        expect(foo[0][0].dateISO).toContain("2021-02-01");
    });
    it(`'day' property for last week's 7th element of getMonthCalendar(${date}) should be 31`, () => {
        expect(foo[3][6].day).toBe(28);
    });
    it(`'isCurrent' property for last week's 7th element of getMonthCalendar(${date}) should be true`, () => {
        expect(foo[3][6].isCurrent).toBeTruthy();
    });
    it(`'dateISO' property for last week's 7th element of getMonthCalendar(${date}) should contain 2021-02-28`, () => {
        expect(foo[3][6].dateISO).toContain("2021-02-28");
    });
})

describe("Negative test getMonthCalendar context for incorrect date '2024-02-30'", () => {
    const _date = "2024-02-30";
    const foo = getMonthCalendar(_date);
    it(`output should be a null for getMonthCalendar(${_date})`, () => {
        expectTypeOf(foo).toBeArray;
        expect(foo.length).toBe(0);
    });
})

describe("Negative test getMonthCalendar context for incorrect date 'bad_trip'", () => {
    const _date = "bad_trip";
    const foo = getMonthCalendar(_date);
    it(`output should be a null for getMonthCalendar(${_date})`, () => {
        expectTypeOf(foo).toBeArray;
        expect(foo.length).toBe(0);
    });
})