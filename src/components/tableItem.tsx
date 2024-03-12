import check from "../assets/check.png";
import cross from "../assets/cross.png";

type Props = {
  brand: string;
  model: string;
  year: number;
  imgUrl: string;
  diesel: boolean;
};

const TableItem = ({ brand, model, year, imgUrl, diesel }: Props) => {
  return (
    <>
      <tr>
        <td>{brand}</td>
        <td>{model}</td>
        <td>{year}</td>
        <td>
          <img src={imgUrl} alt="Image" />
        </td>
        <td>
          <img
            src={` ${diesel ? check : cross}`}
            alt="check image"
            className="check"
          />
        </td>
      </tr>
    </>
  );
};
export default TableItem;
