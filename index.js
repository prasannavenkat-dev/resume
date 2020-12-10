/*HEADER*/

var header=document.createElement("div");
header.setAttribute('id','header');

/*IMAGE*/

var imgdiv = document.createElement('div');
imgdiv.setAttribute('class','imgdiv');

var img = document.createElement('img');
img.setAttribute('src','images/circle-cropped.png');
img.setAttribute('class','image')

/*bar*/

var bar=document.createElement('div');
bar.setAttribute('class','bar');

/*NAME */

var nameBar=document.createElement('div');
nameBar.setAttribute('class','nameBar');
nameBar.innerHTML="PRASANNA VENKATESH";

/*contact */

var contact=document.createElement('div');
contact.innerHTML="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat reprehenderit architecto eaque, mollitia dolores";
contact.setAttribute('class','contact');

/*CONTENT */


var content = document.createElement('div');
content.setAttribute('class','content');
     /*left */
     var contentLeft= document.createElement('div');
      contentLeft.setAttribute('class','contentLeft')
    
        /*profile*/
        var profile=document.createElement('div')
        profile.innerHTML="<i class='fas fa-user customIcon'></i>&nbsp&nbsp<h2>Profile</h2>"
            /*profile decribe */

             var profileDescribe=document.createElement('div')
                 profileDescribe.innerHTML="Innovative optimized solution seeker. Excited to be at the deployment phase of my new career as a web developer. I am ambitious, adventurous, assiduous, animated, and an alliteration advocate."
                 profileDescribe.setAttribute('class','paddingleft paddingRight')  
                 
                 /*SKILLS */

        var skill=document.createElement('div')
          skill.innerHTML='<i class="fas fa-flask customIcon"></i>&nbsp&nbsp<h2>Skills</h2>'
                 /*skill describe */
                 
                 var skillDescribe=document.createElement('div')
                  skillDescribe.setAttribute('class','paddingleftSkill');
          /*Technical Skills */
                 var techSkill=document.createElement('table')
                    techSkill.setAttribute('cellspacing','10')
                
                     /*heading */
                     var headingskill1=document.createElement('th')
                      headingskill1.innerHTML= '-TECHNICAL SKILLS'
                 /* SKILL 1 */
                 var skillRow1=document.createElement('tr');
                         var skillName1=document.createElement('td');
                         skillName1.innerHTML='JavaScript';
                         var skillProgress1=document.createElement('td');
                           var progressLevel1=document.createElement('progress');
                             progressLevel1.setAttribute('value','80')
                             progressLevel1.setAttribute('max','100')
                             progressLevel1.setAttribute('class','progressLevel')

                  /* SKILL 2 */
                  var skillRow2=document.createElement('tr');
                  var skillName2=document.createElement('td');
                  skillName2.innerHTML='CSS';
                  var skillProgress2=document.createElement('td');
                    var progressLevel2=document.createElement('progress');
                      progressLevel2.setAttribute('value','80')
                      progressLevel2.setAttribute('max','100')
                      progressLevel2.setAttribute('class','progressLevel')  
                      
                      
                /*SKILL 3 */

                var skillRow3=document.createElement('tr');
                var skillName3=document.createElement('td');
                skillName3.innerHTML='HTML';
                var skillProgress3=document.createElement('td');
                  var progressLevel3=document.createElement('progress');
                    progressLevel3.setAttribute('value','70')
                    progressLevel3.setAttribute('max','100')
                    progressLevel3.setAttribute('class','progressLevel') 
                    
                    

                      /*SKILL 4*/

                var skillRow4=document.createElement('tr');
                var skillName4=document.createElement('td');
                skillName4.innerHTML='React';
                var skillProgress4=document.createElement('td');
                  var progressLevel4=document.createElement('progress');
                    progressLevel4.setAttribute('value','60')
                    progressLevel4.setAttribute('max','100')
                    progressLevel4.setAttribute('class','progressLevel') 


                    /*SKILL 5*/

                var skillRow5=document.createElement('tr');
                var skillName5=document.createElement('td');
                skillName5.innerHTML='Deployment';
                var skillProgress5=document.createElement('td');
                  var progressLevel5=document.createElement('progress');
                    progressLevel5.setAttribute('value','100')
                    progressLevel5.setAttribute('max','100')
                    progressLevel5.setAttribute('class','progressLevel') 





                       /*Additional Skills */
            
                  var addSkill=document.createElement('table')
                  addSkill.setAttribute('cellspacing','10')

                  /*heading */
                  var headingskill11=document.createElement('th')
                   headingskill11.innerHTML= '– ADDITIONAL SKILLS'
              /* SKILL 1 */
              var skillRow11=document.createElement('tr');
                      var skillName11=document.createElement('td');
                      skillName11.innerHTML='Project Management';
                      var skillProgress11=document.createElement('td');
                        var progressLevel11=document.createElement('progress');
                          progressLevel11.setAttribute('value','100')
                          progressLevel11.setAttribute('max','100')
                          progressLevel11.setAttribute('class','progressLevel')

               /* SKILL 2 */
               var skillRow22=document.createElement('tr');
               var skillName22=document.createElement('td');
               skillName22.innerHTML='Recruitment';
               var skillProgress22=document.createElement('td');
                 var progressLevel22=document.createElement('progress');
                   progressLevel22.setAttribute('value','80')
                   progressLevel22.setAttribute('max','100')
                   progressLevel22.setAttribute('class','progressLevel')  
                   
                   
             /*SKILL 3 */

             var skillRow33=document.createElement('tr');
             var skillName33=document.createElement('td');
             skillName33.innerHTML='Business Development';
             var skillProgress33=document.createElement('td');
               var progressLevel33=document.createElement('progress');
                 progressLevel33.setAttribute('value','100')
                 progressLevel33.setAttribute('max','100')
                 progressLevel33.setAttribute('class','progressLevel') 
                 
                 

                   /*SKILL 4*/

             var skillRow44=document.createElement('tr');
             var skillName44=document.createElement('td');
             skillName44.innerHTML='Editing';
             var skillProgress44=document.createElement('td');
               var progressLevel44=document.createElement('progress');
                 progressLevel44.setAttribute('value','70')
                 progressLevel44.setAttribute('max','100')
                 progressLevel44.setAttribute('class','progressLevel') 


                 /*SKILL 5*/

             var skillRow55=document.createElement('tr');
             var skillName55=document.createElement('td');
             skillName55.innerHTML='Fundraising';
             var skillProgress55=document.createElement('td');
               var progressLevel55=document.createElement('progress');
                 progressLevel55.setAttribute('value','100')
                 progressLevel55.setAttribute('max','100')
                 progressLevel55.setAttribute('class','progressLevel') 

                 /*WorkExperience -left */


      
           /*Work experience */
           var work1Heading=document.createElement('div');
           work1Heading.innerHTML="03/2014 – 02/2017WASHINGTON DC"
           work1Heading.innerHTML="<i class='fas fa-user customIcon'></i>&nbsp&nbsp<h2>WORK EXPERIENCE</h2><strong>"
                    /*WorkExperience describe */
                           var work1Describe = document.createElement('div')
                           work1Describe.setAttribute('class','paddingleft paddingRight')
                           work1Describe.innerHTML="Event Manager<br>C3 Presents</strong><ul><li>Bead and execute all phases of event planning and production spanning committee recruitment, training, vendor relationships and on-site facilitation. </li> <li>Brought new business to the organization through relentless networking and stewardship which helped the company win the bid for the State Department Summit on the Middle East and, the companies largest civic event to date, the United State of Women/li><li>Exercise fiscal control over budget creation, tracking and reporting. Collaborate with employees at all organizational levels to advance cohesive operations.</li></ul>"

                   
    /* right*/
     var contentRight= document.createElement('div');
       contentRight.setAttribute('class','contentRight ')

           /*Work experience */
           var workHeading=document.createElement('div');
           workHeading.innerHTML="06/2011 – 01/2014   LOS ANGELES"
           workHeading.innerHTML="<i class='fas fa-user customIcon'></i>&nbsp&nbsp<h2>WORK EXPERIENCE</h2>"
                /*work experience describe */

                 var workDescribe=document.createElement('div');
                 workDescribe.setAttribute('class','paddingleft');
                  workDescribe.innerHTML="<strong>&nbsp&nbsp&nbspCommunity Relations Manager</strong><ul><li>Building relationships with key media players.</li> <li>Arranging presentations and pitch deck.</li><li>Designing a PR plan and establishing important focus points.</li><li>Designing, creating and managing content across multiple communication platforms.</li></ul>"
            
           /*EDUCATION */
           var edu = document.createElement('div');
           edu.innerHTML='<i class="fas fa-graduation-cap customIcon1"></i>&nbsp&nbsp<h2>Education</h2>'
                var eduPart1= document.createElement('div');
                eduPart1.innerHTML="&nbsp&nbsp&nbsp11/2018 – 06/2018CHICAGO, IL<br> &nbsp&nbsp&nbsp<strong>Engineering Immersion Program   Thinkful</strong><br>&nbsp&nbsp&nbspProject-focused intensive program with emphasis on Mongo, Express, React, &nbsp&nbsp&nbspand JavaScript (MERN) technical stack.<ul><li>Developed a full-stack web application, 'RenewU', using React that allows users to explore various aspects of meditation. User's progress is stored on a backend created using Node and MongoDB.</li><li>Developed a language learning app, 'Foodie Phonetics' using spaced repetition and a linked list data structure. React was used to create the front end components while Node and Mongo were used to create a backend that stores user data.</li><li>Developed a concierge app, 'Pley', for individuals looking for curated suggestions when visiting a new place. React was used to develop the front end which includes real-time chat, drag and drop and variety of advanced features. The backend, built using Node, Express, and Mongo, takes advantage of well-developed RESTful API, Geospatial searching, and user authentication with JWT.</li></ul>"       
                eduPart1.setAttribute('class','paddingleft')


    
                  


/*APPENDING */


/*skill level */
 
techSkill.append(headingskill1)

 /* SKILL1 */

techSkill.append(skillRow1)
skillRow1.append(skillName1)
skillRow1.append(skillProgress1)
skillProgress1.append(progressLevel1)

/* SKILL1 2*/
techSkill.append(skillRow2)
skillRow2.append(skillName2)
skillRow2.append(skillProgress2)
skillProgress2.append(progressLevel2)


/* SKILL1 3*/
techSkill.append(skillRow3)
skillRow3.append(skillName3)
skillRow3.append(skillProgress3)
skillProgress3.append(progressLevel3)

/* SKILL1 4*/
techSkill.append(skillRow4)
skillRow4.append(skillName4)
skillRow4.append(skillProgress4)
skillProgress4.append(progressLevel4)


/* SKILL1 5*/
techSkill.append(skillRow5)
skillRow5.append(skillName5)
skillRow5.append(skillProgress5)
skillProgress5.append(progressLevel5)


/*add level */
 
addSkill.append(headingskill11)

 /* SKILL1 */

addSkill.append(skillRow11)
skillRow11.append(skillName11)
skillRow11.append(skillProgress11)
skillProgress11.append(progressLevel11)

/* SKILL1 2*/
addSkill.append(skillRow22)
skillRow22.append(skillName22)
skillRow22.append(skillProgress22)
skillProgress22.append(progressLevel22)


/* SKILL1 3*/
addSkill.append(skillRow33)
skillRow33.append(skillName33)
skillRow33.append(skillProgress33)
skillProgress33.append(progressLevel33)

/* SKILL1 4*/
addSkill.append(skillRow44)
skillRow44.append(skillName44)
skillRow44.append(skillProgress44)
skillProgress44.append(progressLevel44)


/* SKILL1 5*/
addSkill.append(skillRow55)
skillRow55.append(skillName55)
skillRow55.append(skillProgress55)
skillProgress55.append(progressLevel55)


skill.append(skillDescribe);
skillDescribe.append(techSkill)

skillDescribe.append(addSkill)

skill.append(skillDescribe);

contentLeft.append(profile)
profile.append(profileDescribe)
contentLeft.append(skill)
contentLeft.append(work1Heading)
contentLeft.append(work1Describe)
content.append(contentLeft);
edu.append(eduPart1)
contentRight.append(workHeading)
contentRight.append(workDescribe)

contentRight.append(edu)

content.append(contentRight);

imgdiv.append(img);
header.append(imgdiv);
header.append(nameBar);
header.append(bar);


document.body.append(header);
document.body.append(contact);

document.body.append(content);