const SingleFilm = (props) => {

    const { id, title, description, thumb, price, series, sale_date, type, artists, writers } = props;

    return (

        <div className="w-100 h-100 mb-5 mt-5">
            <img className="w-75 h-75 object-fit-cover" src={thumb} alt="" />
            <p className="fs-5">{title}</p>
        </div>


    )

}

export default SingleFilm