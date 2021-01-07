import React, { useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { fetchCategory } from '../../store/action'
import {Link} from 'react-router-dom'

const Categories = () => {
    const dispatch = useDispatch();
    const { loading, categories, error } = useSelector(state => state.category)
    console.log(categories);
    useEffect(() => {
       dispatch(fetchCategory())
    }, [dispatch])
    return (
        <div>
            <Link to="/addCategories">Add Categories</Link>
        <div className="table">
          <table>
            <thead>
              <tr>
                <td>Id</td>
                <td>Name</td>
              </tr>
            </thead>
                    <tbody>{!loading && !error && <>{categories.map(c => (
                        <tr key={ c._id}>
                            <td>{ c._id}</td>
                            <td>{ c.title}</td>
                </tr>
                    ))}</>}</tbody>
          </table>
        </div>
      </div>
    );
}

export default Categories
