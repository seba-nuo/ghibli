function Search({ films, updateSearch, updateFinded }) {
  const handleSubmit = (e) => {
    const search = e.target[0].value;
    e.preventDefault();

    const compareLowerCase = (film) =>
      film.title.toLowerCase().includes(search.toLowerCase());

    const filteredTitles = films.filter(compareLowerCase);
    
    updateFinded(filteredTitles.length > 0); // used if nothing match 

    updateSearch(filteredTitles);
  };

  const allTitles = films.map((film) => film.title);

  return (
    <form onSubmit={(e) => handleSubmit(e)} onReset={() => updateSearch([])}>
      <input list="titles" placeholder="find some Ghibli film" id="search" />
      <datalist id="titles">
        {allTitles?.map((title) => (
          <option value={title} key={title} />
        ))}
      </datalist>
      <button type="reset">Clear</button>
      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
