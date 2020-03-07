import { connect } from "react-redux";

import { fetchProperty } from "../../actions/common/PropertyFetchActions";
import { fetchMonthMealSummary, fetchYearMealSummary } from "../../actions/infoBar/InfoBarActions";
import InfoBar from "../../components/infoBar/InfoBar";

const mapStateToProps = (state) => {
    return state;
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProperty: (propertyName) => {
            dispatch(fetchProperty(propertyName));
        },
        fetchMonthMealSummary: (year, month) => {
            dispatch(fetchMonthMealSummary(year, month));
        },
        fetchYearMealSummary: (year) => {
            dispatch(fetchYearMealSummary(year));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(InfoBar);
