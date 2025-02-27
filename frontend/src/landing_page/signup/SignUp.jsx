import React from 'react';

function SignUp() {
    
    return ( 
        
        <div class="row mt-5">
            <div class="col-12 col-md-6 offset-md-3">
                <form action="/signup" method="post" class="needs-validation" novalidate>
                    <div class="mb-3">
                        <lable for="username" class="form-label">Username</lable>
                        <input name="username" id="username" type="text" class="form-control" required/>
                        <div class="valid-feedback">Looks good! </div>
                    </div>

                    <div class="mb-3">
                        <lable for="email" class="form-label">Email</lable>
                        <input name="email"  type="email" class="form-control" id="email" required/>
                    </div>

                    <div class="mb-3">
                        <lable for="password" class="form-label">Password</lable>
                        <input name="password"  type="password" class="form-control" id="password" minlength="8" required/>
                    </div>

                    <button class="col-2 btn btn-primary">SignUp</button>
                </form>
            </div>

        </div>
     );
}

export default SignUp;