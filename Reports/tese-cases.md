Feature: CRUD Articles operations

Background:
* Given user is able to login to the main page

@ArticleCreate
Scenario: user is able to create an article
* And user clicks "New Article" button
* When user inputs following data
  * | Article Title | What's this article about? | Write your article |
  * | random title  | random text here           | random body text   |
* And user clicks "Publish Article" button
* Then article created/updated with following data
  * | Banner Header | Article content  |
  * | random title  | random body text |

@ArticleRead
Scenario: user is able to read an article
* And user is able to open "Global Feed" tab
* When user clicks "random title" bold text
* Then article created/updated with following data
    * | Banner Header | Article content  |
    * | random title  | random body text |

@ArticleEdit
Scenario: user is able to edit an article
* And user is able to open "Global Feed" tab
* When user clicks "random title" bold text
* And user clicks "Edit Article" button
* And user inputs following data
    * | Article Title | What's this article about? | Write your article |
    * | new title     | new text here              | new  body text     |
* And user clicks "Publish Article" button
* Then article created/updated with following data
  * | Banner Header | Article content  |
  * | new title     | new body text    |

@ArticleDelete
Scenario: user is able to delete an article
* And user is able to open "Global Feed" tab
* When user clicks "new title" bold text
* And user clicks "Delete Article" button
* Then user displayed "Your Feed" tab
* When user is able to open "Global Feed" tab
* Then user cannot click "new title" bold text

@ArticleCRUD
Scenario: user is able to perform article CRUD operations in single flow
* And user clicks "New Article" button
* When user inputs following data
    * | Article Title | What's this article about? | Write your article |
    * | random title  | random text here           | random body text   |
* And user clicks "Publish Article" button
* Then article created/updated with following data
    * | Banner Header | Article content  |
    * | random title  | random body text |
* And user clicks "Edit Article" button
* And user inputs following data
    * | Article Title | What's this article about? | Write your article |
    * | new title     | new text here              | new  body text     |
* And user clicks "Publish Article" button
* Then article created/updated with following data
    * | Banner Header | Article content  |
    * | new title     | new body text    |
* And user clicks "Delete Article" button
* Then user displayed "Your Feed" tab
* When user is able to open "Global Feed" tab
* Then user cannot click "new title" bold text

> Personally I also add screenshots to the test cases, so it is easy to get visual context.