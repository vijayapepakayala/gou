// import { LightningElement } from 'lwc';
// import { NavigationMixin } from 'lightning/navigation';


// export default class SelectExaminationCOurse extends LightningElement{

//     componentOptions = [
//         { label: 'SFDC ADMIN', value: 'sfdc_admin' },
//         { label: 'SFDC DEVELOPMENT', value: 'sfdc_development' },
//         { label: 'SFDC LWC', value: 'sfdc_lwc' },
//         { label: 'JAVA', value: 'java' }
//     ];

//     handleSelection(event) {
//         const selectedValue = event.detail.value;
//         let pageReference;

//         switch (selectedValue) {
//             case 'sfdc_admin':
//                 pageReference = {
//                     type: 'standard__webPage',
//                     attributes: {
//                         url: 'https://example.com/sfdc_admin_exam_paper'
//                     }
//                 };
//                 break;
//             case 'sfdc_development':
//                 pageReference = {
//                     type: 'standard__webPage',
//                     attributes: {
//                         url: 'https://example.com/sfdc_development_exam_paper'
//                     }
//                 };
//                 break;
//             case 'sfdc_lwc':
//                 pageReference = {
//                     type: 'standard__webPage',
//                     attributes: {
//                         url: 'https://example.com/sfdc_lwc_exam_paper'
//                     }
//                 };
//                 break;
//             case 'java':
//                 pageReference = {
//                     type: 'standard__webPage',
//                     attributes: {
//                         url: 'https://oscarit-e1-dev-ed.develop.lightning.force.com/lightning/n/Java_Exam'
//                     }
//                 };
//                 break;
//             default:
//                 break;
//         }

//         if (pageReference) {
//             this[NavigationMixin.Navigate](pageReference);
//         }
//     }
// }

import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class SelectExaminationCourse extends NavigationMixin(LightningElement) {
    // componentOptions = [
    //     { label: 'SFDC ADMIN', value: 'sfdc_admin' },
    //     { label: 'SFDC DEVELOPMENT', value: 'sfdc_development' },
    //     { label: 'SFDC LWC', value: 'sfdc_lwc' },
    //     { label: 'JAVA', value: 'java' }
    // ];

    // handleSelection(event) {
    //     const selectedValue = event.detail.value;
    //     let pageReference;

    //     switch (selectedValue) {
    //         case 'sfdc_admin':
    //             pageReference = {
    //                 type: 'standard__Tab',
    //                 attributes: {
    //                     url: 'https://example.com/sfdc_admin_exam_paper'
    //                 }
    //             };
    //             break;
    //         case 'sfdc_development':
    //             pageReference = {
    //                 type: 'standard__webPage',
    //                 attributes: {
    //                     url: 'https://example.com/sfdc_development_exam_paper'
    //                 }
    //             };
    //             break;
    //         case 'sfdc_lwc':
    //             pageReference = {
    //                 type: 'standard__webPage',
    //                 attributes: {
    //                     url: 'https://example.com/sfdc_lwc_exam_paper'
    //                 }
    //             };
    //             break;
    //         case 'java':
    //             pageReference = {
    //                 type: 'standard__webPage',
    //                 attributes: {
    //                     url: 'https://oscarit-e1-dev-ed.develop.lightning.force.com/lightning/n/Java_Exam'
    //                 }
    //             };
    //             break;
    //         default:
    //             break;
    //     }

    //     if (pageReference) {
    //         this[NavigationMixin.Navigate](pageReference);
    //     }
    // }
  selectedValue;
  picklistOptions = [
    { label: 'Java', value: 'java' },
    { label: 'SFDC Administration', value: 'admin' },
    { label: 'SFDC Development', value: 'dev' },
    { label: 'SFDC LWC', value: 'lwc' }
  ];

  handlePicklistChange(event) {
    this.selectedValue = event.detail.value;
    if (this.selectedValue === 'java') {
      this[NavigationMixin.Navigate]({
        type: 'standard__navItemPage',
        attributes: {
          apiName: 'Java_Tab_API_Name'
        }
      });
    } else if (this.selectedValue === 'admin') {
      this[NavigationMixin.Navigate]({
        type: 'standard__navItemPage',
        attributes: {
          apiName: 'SFDC_Admin_Tab_API_Name'
        }
      });
    } else if (this.selectedValue === 'dev') {
      this[NavigationMixin.Navigate]({
        type: 'standard__tab',
        attributes: {
          apiName: 'SFDC_Dev_Tab_API_Name'
        }
      });
    } else if (this.selectedValue === 'lwc') {
      this[NavigationMixin.Navigate]({
        type: 'standard__navItemPage',
        attributes: {
          apiName: 'SFDC_LWC_Tab_API_Name'
        }
      });
    }
  }
}


