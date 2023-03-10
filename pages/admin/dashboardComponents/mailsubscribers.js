import Head from "next/head"
import Image from "next/image"
import Quill from "../../user/dashboardComponent/quil"

const Mailsubscribers = () => {
    return (<>
        <Head>
            <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
                rel="stylesheet"
            />
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" />
            <title>Profilex - User Dashboard-edit profile</title>
        </Head>
        <div className="edit-page-header">
            <h4 className="edit-page-title">Mail Subscribers</h4>
            <ul className="breadcrumbs">
                <li className="nav-home">
                    <a>
                        <i className="fa fa-home"></i>
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                    Subscribers
                    </a>
                </li>
                <li className="nav-separator">
                    <a>
                        <i className="fas fa-angle-right"></i>
                    </a>
                </li>
                <li className="nav-item">
                    <a>
                    Mail Subscribers
                    </a>
                </li>
            </ul>
        </div>
        <div className="row">
            <div className="col-md-12">
                <div className="edit-card">
                    <div className="edit-card-header ">
                        <div className="edit-card-title">Send Mail</div>
                    </div>
                    <div className="edit-card-body">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <form action="">
                                    <div className="row ">
                                        <div className="form-group">
                                            <label>Subject **</label>
                                            <input type="text" name="first_name" className="form-control" value="Enter subject of E-mail" />
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-12 mt-3 mb-5">
                                                <Quill />
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="edit-card-footer mt-3">
                        <form action="">
                            <div className="form-group">
                                <div className="col-md-12 btn-center">
                                    <button type="submit" id="btn-submit" className="btn btn-success">Send Mail</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </>)
}
export default Mailsubscribers;