const Input = (repo) => {
    return (
        <div className="mb-3">
            <label className="form-label">{repo.label}</label>
            <input name={repo.name} type={repo.type} className="form-control" onChange={repo.onChange} value={repo?.value} />
        </div>
    )
}
export default Input