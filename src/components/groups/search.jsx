

export const Search = () => {
  return (
    <>
    <div className="searchContainer">
        <div className="dropdown">
            <button className="dropbtn">Select a game</button>
            <div className="dropdown-content">
                <a href="#">Game 1</a>
                <a href="#">Game 2</a>
                <a href="#">Game 3</a>
            </div>
        </div>
        <input type="text" placeholder="Search..." />
    </div>
    </>
  )
}
