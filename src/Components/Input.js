import { useEffect, useState } from "react";
import "./booksapi.css";
import axios from "axios";
import Cards from "./Cards";
import AutoComplete from "./AutoComplete";
import Loader from "./Loader";
function Input() {
  const [searchField, setSearchField] = useState();
  const [field, setField] = useState("all");
  const [booksData, setBooksData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchField}&api-key=BvhLZm5Zzzi6dSamhLDlpaeCkL2w6rpZ`
      )
      .then((res) => {
        console.log(res);
        setBooksData(res?.data?.response?.docs);
        setIsLoading(false);
        setTotalResults(res?.data?.response?.docs?.length);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const searchBook = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchField}&api-key=BvhLZm5Zzzi6dSamhLDlpaeCkL2w6rpZ`
      )
      .then((res) => {
        console.log(res);
        setBooksData(res?.data?.response?.docs);
        setIsLoading(false);
        setTotalResults(res?.data?.response?.docs?.length);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const Articles = [
    "Books",
    "Movies",
    "Politics",
    "World",
    "Sports",
    "Animals",
    "Wildlife",
    "Article",
    "Country",
    "News",
    "Mobiles",
    "Accessories",
    "Shop",
    "Clothes",
    "Marketing",
    "Software",
    "Building",
    "Airports",
    "Grocery",
    "Cosmetics",
  ];

  const handleChange = () => {
    setField(searchField);
  };

  return (
    <div>
      <form className='forms' onSubmit={searchBook}>
        <AutoComplete options={Articles} setSelectedOptions={setSearchField} />
        <div className='btn'>
          <button
            onClick={handleChange}
            className='btn btn-primary'
            type='submit'
          >
            Search
          </button>
        </div>
      </form>
      <div className='loadingDiv'>{isLoading && <Loader />}</div>
      <Cards
        booksData={booksData}
        setBooksdata={setBooksData}
        isLoading={isLoading}
        totalResults={totalResults}
        searchField={searchField}
        field={field}
      />
    </div>
  );
}

export default Input;
