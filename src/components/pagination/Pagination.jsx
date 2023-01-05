import Button from "../button/Button";


const PageSizeSelector = ({ defaultPageSize = 10, pageSizeOptions = [10,20,50,100], onPageSizeChange }) => {
  return (
    <li>
      <div className="pagination__page-size-selector" aria-label="Page Size">
        <select name="page-size" id="page-size" defaultValue={defaultPageSize} onChange={onPageSizeChange}>
          {pageSizeOptions.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      </div>
    </li>
  )
}

export default function Pagination({
  currentPage,
  count,
  pageSize = 10,
  onPageChange,
  onPageSizeChange,
}) {
  const TOTAL_PAGES = Math.ceil(count / pageSize);
  const PAGES = Array.from({ length: TOTAL_PAGES }, (_, index) => index + 1);

  return (
      <ul className="pagination">
        <li>{`Total ${count} row${count !== 1 ? 's': ''}`}</li>
          <Button text="<" style="secondary" onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
          {PAGES.map((page) => (
            <li
              key={page}
              onClick={() => onPageChange(page)}
              className={
                page === currentPage
                  ? "button_primary"
                  : "button_secondary"
              }
            >
              {page}
            </li>
          ))}
          <Button
            text=">"
            style="secondary"
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === PAGES.length}
          />
        <PageSizeSelector onPageSizeChange={onPageSizeChange} />
      </ul>
  )
}