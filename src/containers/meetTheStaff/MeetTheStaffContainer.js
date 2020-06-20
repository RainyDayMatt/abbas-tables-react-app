import { connect } from "react-redux";

import { fetchProperty } from "../../actions/common/PropertyFetchActions";
import MeetTheStaff from "../../components/meetTheStaff/MeetTheStaff";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProperty: (propertyName) => {
            dispatch(fetchProperty(propertyName));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MeetTheStaff);
