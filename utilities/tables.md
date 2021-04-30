# Tables

## Table

The `table` utility behaves like HTML `<table>` element. It defines a block-level box. Table element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

| table	| display: table; |

## Inline Table

The `inline-table` utility does not have a direct mapping in HTML. It behaves like an HTML `<table>` element, but as an inline box, rather than a block-level box. Inside the table box is a block-level context.

| inline-table	| display: inline-table; |

## Table Caption

The `table-caption` utility behaves like `<caption>` HTML element. The HTML `<caption>` element specifies the caption (or title) of a table.

| table-caption	| display: table-caption; |

## Table Cell

The `table-cell` utility behaves like `<td>` HTML element. The HTML `<td>` element defines a cell of a table that contains data. It participates in the table model.

| table-cell	| display: table-cell; |

## Table Row

The `table-row` utility behaves like `<tr>` HTML element. The HTML `<tr>` element defines a row of cells in a table. The row's cells can then be established using a mix of `<td>` (data cell) and `<th>` (header cell) elements.

| table-row	| display: table-row; |

## Table Column

The `table-column` utility behaves like `<col>` HTML element. The HTML `<col>` element defines a column within a table and is used for defining common semantics on all common cells. It is generally found within a `<colgroup>` element.

| table-column	| display: table-column; |

## Table Row Group

The `table-row-group` utility behaves like `<tbody>` HTML element. The HTML Table Body element (`<tbody>`) encapsulates a set of table rows (`<tr>` elements), indicating that they comprise the body of the table (`<table>`).

| table-row-group	| display: table-row-group; |

## Table Column Group

The `table-column-group` utility behaves like `<colgroup>` HTML element. The HTML `<colgroup>` element defines a group of columns within a table.

| table-column-group	| display: table-column-group; |

## Table Header Group

The `table-header-group` utility behaves like `<thead>` HTML element. The HTML `<thead>` element defines a set of rows defining the head of the columns of the table.

| table-header-group	| display: table-header-group; |

## Table Footer Group

The `table-footer-group` utility behaves like `<tfoot>` HTML element. The HTML `<tfoot>` element defines a set of rows summarizing the columns of the table.

| table-footer-group	| display: table-footer-group; |

## Table Layout

Utilities for controlling the table layout algorithm.

| Class | Properties |
| :---- | :--------- |
| table-auto | table-layout: auto; |
| table-fixed | table-layout: fixed; |

## Table Border Collapse

Utilities for controlling whether table borders should collapse or be separated.

| Class | Properties |
| :---- | :--------- |
| border-collapse | border-collapse: collapse; |
| border-separate | border-collapse: separate; |