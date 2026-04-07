export const GeneralInfo = ({ name, email, bio, onChange }) => {
    return(
        <>
            <div className="mb-3">
                <label className="d-block">
                    <span>Name</span>
                    <input 
                        name="name"
                        type="text"
                        className="form-control"
                        onChange={onChange}
                        value={name}
                    />
                </label>
            </div>

            <div className="mb-3">
                <label className="d-block">
                    <span>Email</span>
                    <input
                        name="email"
                        type="email"
                        className="form-control"
                        onChange={onChange}
                        value={email}
                        />
                </label>
            </div>

            <div className="mb-3">
                <label className="d-block">
                    <span>BIO</span>
                    <textarea
                        name="bio"
                        className="form-control"
                        onChange={onChange}
                        value={bio}
                     />
                </label>
            </div>
        </>
    )

}