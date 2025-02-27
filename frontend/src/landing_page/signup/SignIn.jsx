import React from 'react';

function SignIn() {
    return ( 
        <div class="row mt-5">
            <div class="col-12 col-md-6 offset-md-3">
                <form action="/signin" method="post" class="needs-validation" novalidate>
                    <div class="mb-3">
                        <lable for="username" class="form-label">Username</lable>
                        <input name="username" id="username" type="text" class="form-control" required/>
                    </div>

                    <div class="mb-3">
                        <lable for="password" class="form-label">Password</lable>
                        <input name="password"  type="password" class="form-control" id="password" required/>
                    </div>

                    <button class="btn btn-primary col-2 ">Sign In</button>
                </form>
            </div>
        </div>
     );
}

export default SignIn;