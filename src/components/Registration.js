import React from 'react'
import {useForm} from 'react-hook-form'
function Registration(){
    const {register,handleSubmit,formState:{errors}}=useForm()
    return(
        <div className='row'>
            <div className='col-11 col-sm-8 col-md-6 mx-auto'>
            <form className=''>
                <div className='mb-3'>
                   <label htmlFor='fn'>First Name</label>
                   <input type='text' id="fn" className="form-control"{...register("firstname")}/>
                </div>
                <div className='mb-3'>
                   <label htmlFor='fn'>Last Name</label>
                   <input type='text' id="ln" className="form-control"{...register("lastname")}/>
                </div>
                <div className='mb-3'>
                   <label htmlFor='email'>Email-Id</label>
                   <input type='email' id="email" className="form-control"{...register("email")}/>
                </div>
                <div className='mb-3'>
                   <label htmlFor='pn'>Phone Number</label>
                   <input type='text' id="pn" size="10" className="form-control"{...register("phone")}/>
                </div>
                <div className='mb-3'>
                   <label htmlFor='address'>Address</label>
                   <input type='text' id="address" className="form-control"{...register("address")}/>
                </div>
                <div className='mb-3'>
                   <label htmlFor='m/w'>Which type of clothes you want to donate?</label>
                   <select id="m/w" className="form-control"{...register("menorwomen")}>
                    
                     <option value="men">Male</option>
                     <option value="women">Female</option>
                   </select>
                   <div className='mb-3'>
                   <label htmlFor='cb'>Select Age</label>
                   <div>
                   <input type='checkbox' id="2-4" className="form-control"{...register("2-4")}/>
                   <label htmlFor='2-4'>2-4 years</label>
                   </div>
                   <div>
                   <input type='checkbox' id="5-10" className="form-control"{...register("5-10")}/>
                   <label htmlFor='5-10'>5-10 years</label>
                   </div>
                   <div>
                   <input type='checkbox' id="11-15" className="form-control"{...register("11-15")}/>
                   <label htmlFor='11-15'>11-15 years</label>
                   </div>
                   <div>
                   <input type='checkbox' id="16-20" className="form-control"{...register("16-20")}/>
                   <label htmlFor='16-20'>16-20 years</label>
                   </div>
                   <div>
                   <input type='checkbox' id="20-30" className="form-control"{...register("20-30")}/>
                   <label htmlFor='20-30'>20-30 years</label>
                   </div>
                   <div>
                   <input type='checkbox' id=">30" className="form-control"{...register(">30")}/>
                   <label htmlFor='>30'>Above 30</label>
                   </div>
                   </div>
                </div>
                

            </form>
            </div>
        </div>
            
    )
}
export default Registration
