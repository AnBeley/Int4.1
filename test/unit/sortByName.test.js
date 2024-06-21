const sorting = require("../../app");

describe("Books names test suit", () => {
  it("Books names should be sorted in ascending order", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  it("Shouldn't being sorted if descending order", () => {
    const input = [
      "Властелин Колец",
      "Гарри Поттер",
      "Дом, который построил Джек",
    ];

    const expected = [
      "Властелин Колец",
      "Гарри Поттер",
      "Дом, который пострил Джек",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });

  it("Books names should be sorted if duplicated", () => {
    const input = [
      "Гарри Поттер",
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
    ];
    const expected = [
      "Властелин Колец",
      "Волшебник изумрудного города",
      "Гарри Поттер",
      "Гарри Поттер",
    ];

    const output = sorting.sortByName(input);

    expect(output).toEqual(expected);
  });
});
