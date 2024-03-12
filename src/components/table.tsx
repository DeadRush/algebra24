import { arrayOfCars } from "../data/global";
import TableItem from "./tableItem";

const Table = () => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
            <th>Images</th>
            <th>Diesel</th>
          </tr>
        </thead>
        <tbody>
          {arrayOfCars.map((item) => {
            return (
              <>
                <TableItem
                  brand={item.brand}
                  model={item.model}
                  year={item.year}
                  imgUrl={item.imgUrl}
                  diesel={item.diesel}
                  key={item.id}
                />
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Table;
