// Copyright (c) 2017 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getCurrentUser} from 'mattermost-redux/selectors/entities/users';

import {close as closeLhs} from 'actions/views/lhs';

import WebrtcSidebar from './webrtc_sidebar';

function mapStateToProps(state) {
    // TODO
    return {
        currentUser: getCurrentUser(state),
        userId: null,
        isCaller: false,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            closeLhs,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(WebrtcSidebar);
