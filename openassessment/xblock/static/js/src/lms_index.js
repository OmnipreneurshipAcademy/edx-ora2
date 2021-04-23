import './oa_shared';
import './adg/lib/table_builder';
import './adg/lib/helpers';

import {
  OpenAssessmentBlock,
  CourseOpenResponsesListingBlock,
  StaffAssessmentBlock,
} from './lms/oa_base';

window.OpenAssessmentBlock = OpenAssessmentBlock;
window.CourseOpenResponsesListingBlock = CourseOpenResponsesListingBlock;
window.StaffAssessmentBlock = StaffAssessmentBlock;
