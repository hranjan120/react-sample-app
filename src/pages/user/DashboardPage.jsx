import { MultiSelect } from "react-multi-select-component";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { userProfilePicUpload, userCvUpload, clearError } from "../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

const options = [
    { label: "Grapes 🍇", value: "grapes" },
    { label: "Mango 🥭", value: "mango" },
    { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

export default function DashboardPage() {
    const dispatch = useDispatch();
    const userObjData = useSelector((state) => state.userObj);
    console.log(userObjData);

    const { register, control, handleSubmit } = useForm({
        defaultValues: {
            test: [{ compName: "", startDate: "", endDate: "" }],
            test1: [{ schoolName: "", passingYear: "", boardName: "", percentage: "" }]
        }
    });

    const {
        fields: educationField,
        append: educationAppend,
        remove: educationRemove
    } = useFieldArray({
        control, name: "test1", rules: {
            required: true,
        }
    });
    const {
        fields: expFields,
        append: expAppend,
        remove: expRemove
    } = useFieldArray({
        control, name: "test", rules: {
            required: true,
        }
    });


    const handleResumeUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        dispatch(clearError());
        dispatch(userCvUpload(formData));
    }
    const handlePicUpload = (event) => {
        const file = event.target.files[0];
        const formData = new FormData();
        formData.append("file", file);
        dispatch(clearError());
        dispatch(userProfilePicUpload(formData));
    }

    const onSubmitSignUpFrm = (values) => {
        console.log(values)
    };

    return (
        <>
            {/* profile pic, hobbies [], skills [], job profile, experience detail [], education detail [], cv */}
            <section className="blog_area">
                <div className="container">

                    <div className="row">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2>Image</h2>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2>Name</h2>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <h2>Email</h2>
                        </div>
                    </div>


                    <form onSubmit={handleSubmit(onSubmitSignUpFrm)}>
                        <div className="row">

                            <div className="col-lg-12 mb-5 mb-lg-0">
                                <div className="form-group">
                                    <label htmlFor="email">Job Profile:</label>
                                    <input type="text" className="form-control" {...register("jobProfile", {
                                        required: "jobProfile is required.",
                                        minLength: {
                                            value: 5,
                                            message: "jobProfile must be minimum 5 Characters"
                                        }
                                    })} />
                                </div>
                            </div>

                            <div className="col-lg-12 mb-5 mb-lg-0">
                                <hr />
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="form-group">
                                    <label htmlFor="email">Profile Pic:</label>
                                    <input type="file" className="form-control" onChange={handlePicUpload} />
                                    <input type="text" className="form-control" {...register("profilePic", {
                                        required: "profilePic is required.",
                                    })} />
                                </div>
                            </div>

                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="form-group">
                                    <label htmlFor="email">Resume:</label>
                                    <input type="file" className="form-control" onChange={handleResumeUpload} />
                                    <input type="text" className="form-control" {...register("resume", {
                                        required: "resume is required.",
                                    })} />
                                </div>
                            </div>

                            <div className="col-lg-12 mb-5 mb-lg-0">
                                <hr />
                            </div>


                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <div className="form-group">
                                    <label htmlFor="email">Skills:</label>
                                    <Controller
                                        name="skills"
                                        control={control}
                                        rules={{
                                            required: true,
                                        }}
                                        render={({ field: { onChange, value } }) => (
                                            <MultiSelect
                                                options={options}
                                                value={value ? value : []}
                                                onChange={onChange}
                                                labelledBy="Select"
                                                hasSelectAll={false}
                                            />
                                        )}
                                    />


                                </div>
                            </div>

                            <div className="col-lg-12 mb-5 mb-lg-0">
                                <hr />
                                <h6>Experience Detail:</h6>
                                <button className="btn-warning" onClick={() => {
                                    expAppend({ compName: "", startDate: "", endDate: "" });
                                }}>Add</button>
                            </div>

                            {expFields.map((item, index) => {
                                return (
                                    <div key={item.id} className="col-lg-12 mb-5 mb-lg-0">
                                        <div className="row">
                                            <Controller
                                                rules={{ required: true, minLength: 2 }}
                                                render={({ field }) => <div className="col-lg-4 mb-5 mb-lg-0"><input placeholder="company name" className="form-control" {...field} /></div>}
                                                name={`test.${index}.compName`}
                                                control={control}
                                            />
                                            <Controller
                                                rules={{ required: true, minLength: 2 }}
                                                render={({ field }) => <div className="col-lg-3 mb-5 mb-lg-0"><input placeholder="start date" className="form-control" {...field} /></div>}
                                                name={`test.${index}.startDate`}
                                                control={control}
                                            />
                                            <Controller
                                                rules={{ required: true, minLength: 2 }}
                                                render={({ field }) => <div className="col-lg-3 mb-5 mb-lg-0"><input placeholder="end date" className="form-control" {...field} /></div>}
                                                name={`test.${index}.endDate`}
                                                control={control}
                                            />
                                            <div className="col-lg-2 mb-5 mb-lg-0">
                                                <button className="btn-info" type="button" onClick={() => expRemove(index)} disabled={index === 0}>
                                                    Delete
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                );
                            })}

                            <div className="col-lg-12 mb-5 mb-lg-0">
                                <hr />
                                <h6>Education Detail:</h6>
                                <button className="btn-warning" onClick={() => {
                                    educationAppend({ schoolName: "", passingYear: "", boardName: "", percentage: "" });
                                }}>Add</button>
                            </div>

                            {educationField.map((item, index) => {
                                return (
                                    <div key={item.id} className="col-lg-12 mb-5 mb-lg-0">
                                        <div className="row">
                                            <Controller
                                                rules={{ required: true, minLength: 2 }}
                                                render={({ field }) => <div className="col-lg-4 mb-5 mb-lg-0"><input placeholder="school name" className="form-control" {...field} /></div>}
                                                name={`test1.${index}.schoolName`}
                                                control={control}
                                            />
                                            <Controller
                                                rules={{ required: true, minLength: 2 }}
                                                render={({ field }) => <div className="col-lg-4 mb-5 mb-lg-0"><input placeholder="passing year" className="form-control" {...field} /></div>}
                                                name={`test1.${index}.passingYear`}
                                                control={control}
                                            />
                                            <Controller
                                                rules={{ required: true, minLength: 2 }}
                                                render={({ field }) => <div className="col-lg-4 mb-5 mb-lg-0"><input placeholder="board name" className="form-control" {...field} /></div>}
                                                name={`test1.${index}.boardName`}
                                                control={control}
                                            />
                                            <Controller
                                                rules={{ required: true, minLength: 2 }}
                                                render={({ field }) => <div className="col-lg-4 mb-5 mb-lg-0"><input placeholder="percentage" className="form-control" {...field} /></div>}
                                                name={`test1.${index}.percentage`}
                                                control={control}
                                            />
                                            <div className="col-lg-2 mb-5 mb-lg-0">
                                                <button className="btn-info" type="button" onClick={() => educationRemove(index)} disabled={index === 0}>
                                                    Delete
                                                </button>
                                            </div>

                                        </div>
                                    </div>

                                );
                            })}

                            <div className="col-lg-12 mb-5 mb-lg-0">
                                <button type="submit" className="btn btn-primary btn-block mt-3">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}