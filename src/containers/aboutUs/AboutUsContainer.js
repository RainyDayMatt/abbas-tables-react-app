import { connect } from "react-redux";

import { fetchProperty } from "../../actions/common/PropertyFetchActions";
import AboutUs from "../../components/aboutUs/AboutUs";

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
)(AboutUs);
