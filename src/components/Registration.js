import React from 'react'
import {useForm} from 'react-hook-form'

function Registration(){
    const {register,handleSubmit,formState:{errors}}=useForm()

    // form submission
    const onFormSubmit=(userData)=>{
        console.log(userData)
    }


    return(
        <div className='row mt-3'>
        <p className="display-1 text-primary text-center ">User Registration</p>
        <div className='col-11 col-sm-8 col-md-6 mx-auto mt-3'>
        <form onSubmit={handleSubmit(onFormSubmit)}>
            {/* First Name  */}
            <div className='mb-3'>
               <label htmlFor='fn'>First Name</label>
               <input type='text' id="fn" className="form-control"{...register("firstname",{required:true})}/>
               {errors.firstname?.type ==='required' && <p className="text-danger">*Firstname is Required</p>}
            </div>
             {/* Last Name  */}
            <div className='mb-3'>
               <label htmlFor='fn'>Last Name</label>
               <input type='text' id="ln" className="form-control"{...register("lastname",{required:true})}/>
               {errors.lastname?.type ==='required' && <p className="text-danger">*Lastname is Required</p>}
            </div>
             {/* email */}
            <div className='mb-3'>
               <label htmlFor='email'>Email-Id</label>
               <input type='email' id="email" className="form-control"{...register("email",{required:true})}/>
               {errors.email?.type ==='required' && <p className="text-danger">*Email is Required</p>}
               
            </div>
             {/* Phone Number  */}
            <div className='mb-3'>
               <label htmlFor='pn'>Phone Number</label>
               <input type='text' id="pn" size="10" className="form-control"{...register("phone",{required:true,minLength: 10})}/>
               {errors.phone?.type ==='required' && <p className="text-danger">*Phone no is Required</p>}
               {errors.phone?.type ==='minLength' && <p className="text-danger">*Minimum Length should be 10</p>}
            </div>
             {/* Address */}
            <div className='mb-3'>
               <label htmlFor='address'>Address</label>
               <input type='text' id="address" className="form-control"{...register("address",{required:true})}/>
               {errors.address?.type ==='required' && <p className="text-danger">*Address is Required</p>}
            </div>
             {/* Gender  */}
            <div className='mb-3'>
               <label htmlFor='m/w'>Which type of clothes you want to donate?(Gender)</label>
               <select id="m/w" className="form-select"{...register("menorwomen",{required:true})} defaultValue={'Male'}>
                
                 <option value="men">Male</option>
                 <option value="women">Female</option>
               </select>
               {errors.menorwomen?.type ==='required' && <p className="text-danger">*Phone no is Required</p>}
            </div>
               {/Age/}
             <div className="mb-3">
                  <label>Choose the agewise clothes you want to donate?</label>
                   {/* 0- 5 yrs*/}
                   <div className="form-check">
                      <input type="radio" id="age" className="form-check-input"{...register("age",{required:true})} value="0-7"/>
                      <label htmlFor="0-7" className="form-check-label">0-7 yrs</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="age" className="form-check-input"{...register("age",{required:true})} value="8-16"/>
                      <label htmlFor="8-16" className="form-check-label">8-16 yrs</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="age" className="form-check-input"{...register("age",{required:true})} value="17-24"/>
                      <label htmlFor="17-24" className="form-check-label">17-24 yrs</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="age" className="form-check-input"{...register("age",{required:true})} value="25-30"/>
                      <label htmlFor="25-30" className="form-check-label">25-30 yrs</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="age" className="form-check-input"{...register("age",{required:true})} value="greater than 30"/>
                      <label htmlFor="greater than 30" className="form-check-label">greater than 30 yrs</label>
                   </div>
                   {errors.age?.type ==='required' && <p className="text-danger">*Age is Required</p>}
            </div>
            {/* No.of clothes */}
            <div className='mb-3'>
               <label htmlFor='no'> Number of clothes</label>
               <input type='text' id="no" className="form-control"{...register("number",{required:true})}/>
               {errors.number?.type ==='required' && <p className="text-danger">*Number of Clothes Required</p>}
            </div>
            {/* size of clothes */}
            <div className="mb-3">
                  <label>Choose the size of  clothes you want to donate?</label>
                   {/* 0- 5 yrs*/}
                   <div className="form-check">
                      <input type="radio" id="size" className="form-check-input"{...register("size",{required:true})} value="XS"/>
                      <label htmlFor="XS" className="form-check-label">XS</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="size" className="form-check-input"{...register("size",{required:true})} value="S"/>
                      <label htmlFor="S" className="form-check-label">S</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="size" className="form-check-input"{...register("size",{required:true})} value="L"/>
                      <label htmlFor="L" className="form-check-label">L</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="size" className="form-check-input"{...register("size",{required:true})} value="XL"/>
                      <label htmlFor="XL" className="form-check-label">XL</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="size" className="form-check-input"{...register("size",{required:true})} value="XXL"/>
                      <label htmlFor="XXL" className="form-check-label">XXL</label>
                   </div>
                   {errors.size?.type ==='required' && <p className="text-danger">*Size is Required</p>}
            </div>
             {/* Slot timings*/}
             <div className="mb-3">
                  <label>Select the slot to pick the clothes?</label>
                   {/* 0- 5 yrs*/}
                   <div className="form-check">
                      <input type="radio" id="time" className="form-check-input"{...register("time",{required:true})} value="8:00am - 11:00am"/>
                      <label htmlFor="8:00am - 11:00am" className="form-check-label">8:00am - 11:00am</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="time" className="form-check-input"{...register("time",{required:true})} value="2:00pm - 4:00pm"/>
                      <label htmlFor="2:00pm - 4:00pm" className="form-check-label">2:00pm - 4:00pm</label>
                   </div>
                   <div className="form-check">
                      <input type="radio" id="time" className="form-check-input"{...register("time",{required:true})} value="7:00pm - 10:00pm"/>
                      <label htmlFor="7:00pm - 10:00pm" className="form-check-label">7:00pm - 10:00pm</label>
                   </div>
                   {errors.time?.type ==='required' && <p className="text-danger">*Time is Required</p>}
            </div>
              <button type="submit" className="btn btn-success w-100 mt-5">Submit</button>
        </form>
        </div>
    </div>
    )
}
export default Registration
