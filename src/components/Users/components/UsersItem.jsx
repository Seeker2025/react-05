import css from './Users.module.css';

export const UsersItem = ({ user, onDelete }) =>{
    const { id, name, email, bio, skils, isOpenToWork } = user;

    const handleDelete = () => {
        
        onDelete(id)
        
    }

    return (
        <div className={css.card}>
            <div className="card-body">
                <h5 className="card-title">
                    {name}
                    {isOpenToWork && <p className="badge bg-success"></p>}
                </h5>

                <h6 className="card-subtitle">{email}</h6>
                <p className="card-text">{bio}</p>

                <div className="d">
                    {skils.map(skil=>(
                        <span key={skil} className="badge-dark">
                            {skil}
                        </span>
                    ))}

                </div>

                <div className="d-flex">
                    <button type="button" className="card-link" onClick={handleDelete}>
                        Delete
                    </button>

                </div>


            </div>
        </div>
    )
}