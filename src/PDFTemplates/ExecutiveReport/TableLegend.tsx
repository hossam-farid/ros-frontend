import React, { ReactNode } from 'react';

export type TableLegendProps = {
  columns: ReactNode[];
  rows: ReactNode[][];
};

// Plain elements with PatternFly's class names: a PDF is never interactive,
// so it keeps the styling without the hooks PatternFly runs for every cell.
const TableLegend: React.FC<TableLegendProps> = ({ rows, columns }) => (
    <table role="grid" className="pf-v6-c-table pf-m-grid-md pf-m-compact pf-m-striped">
        <thead className="pf-v6-c-table__thead">
            <tr className="pf-v6-c-table__tr">
                {columns.map((column, index) => (
                    <th key={index} scope="col" className="pf-v6-c-table__th">{column}</th>
                ))}
            </tr>
        </thead>
        <tbody role="rowgroup" className="pf-v6-c-table__tbody">
            {rows.map((row, i) => (
                <tr key={i} className="pf-v6-c-table__tr">
                    {row.map((item, index) => (
                        <td className="pf-v6-c-table__td pf-v6-u-pt-xs pf-v6-u-pb-xs" key={index}>
                            {item}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
);

export default TableLegend;
