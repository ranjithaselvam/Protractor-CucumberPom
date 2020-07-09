Feature: Main navigation
   @dashboard
   Scenario: Dashboard
      Given User launch the chrome browser
      When  User opens URL "http://10.10.10.231:8082/#/app/dashboard"
      Then  Page Title should be "ATMECS - Falcon Test Repotrs"
      And   Click REST API TEST RESULT Link in dashboard
      And   Select status as pass
      Then  Able to get pass test cases
         | Test Case Name                | Duration | Status |
         | deleteProjectApiTest          | 0 Sec    | Pass   |
         | downloadImageApiTest          | 0 Sec    | Pass   |
         | exportToExcelApiTest          | 0 Sec    | Pass   |
         | getDashboardApiTest           | 1 Sec    | Pass   |
         | recentRunsApiTest             | 0 Sec    | Pass   |
         | reportViewApiTest             | 0 Sec    | Pass   |
         | uploadImageApiTest            | 2 Sec    | Pass   |
         | uploadTestngResultFileApiTest | 0 Sec    | Pass   |
         | viewReportApiTest             | 0 Sec    | Pass   |

      When  User click on toggle button
   
      Then  User can able to view test status
         | status  | details    |
         | testrun | 10 TEST(S) |
         | pass    | 9          |
         | fail    | 1          |
         | skip    | 0          |





Then  close the browser
@recentrun

   Scenario: Recent run
      When Click on recent run
      And Select product
      And Select test case
      Then User can view the tesct case details