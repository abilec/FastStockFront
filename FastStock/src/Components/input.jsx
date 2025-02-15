const Input = (repo) => {
    return(
        <div className="mb-3">
            <label htmlFor={repo.for} className="form-label">{repo.label}</label>
            <input type={repo.type} className="form-control" onChange={repo.onChange}/>
        </div>
    )
}
export default Input