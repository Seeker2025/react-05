import css from '../../Users.module.css';

export const Availability = () => {
    return (
        <fieldset className="mt-3">

            <legend className="h6">Availability</legend>

        <div className="form-check">

            <label className="form-check-label">

                <span >Is open to work</span>
                <input className={css.formInputCheckbox} type="checkbox"/>


            </label>
            
        </div>    
            
        </fieldset>
    )
}