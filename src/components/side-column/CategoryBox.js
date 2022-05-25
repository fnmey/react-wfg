// category box component that stores the category and status information
// this component is static and only its components change dynamically
const CategoryBox = ({ activeCategory, activeStatus }) => {
  return (
    <table>
      <th colSpan={"2"}>Category</th>
      <tr>
        <td>{activeCategory}</td>
        <td>{activeStatus}</td>
      </tr>
    </table>
  );
};

export default CategoryBox;
