let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
let years=[]
var monthdays=[];
var argies=[]
var sk=[]
let liberation="0"
let citySaint="0"
var alldays=0;
let holidays=[
    {type:2000, kd:313, mp:428},
    {type:2001, kd:226, mp:413},
    {type:2002, kd:318, mp:53},
    {type:2003, kd:310, mp:425},
    {type:2004, kd:223, mp:49},
    {type:2005, kd:314, mp:429},
    {type:2006, kd:36, mp:421},
    {type:2007, kd:219, mp:46},
    {type:2008, kd:310, mp:425},
    {type:2009, kd:32, mp:417},
    {type:2010, kd:215, mp:42},
    {type:2011, kd:37, mp:422},
    {type:2012, kd:227, mp:413},
    {type:2013, kd:318, mp:53},
    {type:2014, kd:33, mp:418},
    {type:2015, kd:223, mp:410},
    {type:2016, kd:314, mp:429},
    {type:2017, kd:227, mp:414},
    {type:2018, kd:219, mp:46},
    {type:2019, kd:311, mp:426},
    {type:2020, kd:32, mp:417},
    {type:2021, kd:315, mp:430}

]

function year(start, end){
    let x=start
    while (x<=end){
        years.push(x)
        x++
    }

}


function monthday(y, m, start, finish){
let kd1=holidays.find(function(x){return x.type==y})
kd1=kd1.kd
kd1=String(kd1)
let mp1=holidays.find(obj=>{return obj.type==y})
mp1=mp1.mp
mp1=String(mp1)
let sum=0;
let argiessum=0;
let sksum=0;
for (i=start;i<=finish;i++){
alldays+=1
let thisday=String(m)+String(i)
if (thisday=="11" || thisday=="16" || thisday=="325" || thisday=="51" || thisday=="815" || thisday=="1028" || thisday=="1225" || thisday=="1226" || thisday=="16" || thisday==kd1 || thisday==mp1 ||thisday==liberation || thisday==citySaint){
    argiessum+=1
    continue;
}
let myday=day(y,m,i)
if (myday!=6 & myday!=0){
sum+=1
}else{
sksum+=1
}
}
argies.push(argiessum)
sk.push(sksum)
return sum
}

function leap (y){
    if (y%400==0){
        return 29
        }
    if (y%4==0 && y%100!==0){
        return 29
    }
    return 28
    }

function day(y, m, d){
let dt=new Date(y,m-1,d)
return dt.getDay();
}

function calcMonthDays(year, month){
    if (month==2){
       return leap(year)
        } else if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12){
        return 31
    } else{
        return 30
        }  
    }

function calcYear(thisYear, startmonth, endmonth){
        for (k=startmonth;k<endmonth+1;k++){
        let monthDays=calcMonthDays(thisYear,k);
        let workDays=monthday(thisYear,k,1,monthDays);
        monthdays.push(workDays);    
    } 
}

function calc(starty, endy, startm, endm,startd,endd){


year (starty, endy)  

//ypologizw ton prwto mhna 
   //an mono enas mhnas, return
if (starty==endy & startm==endm){
monthdays.push(monthday(starty, startm, startd, endd))
return
    //diaforetika ypologizw ton prwto mhna kai synexizw 
}else{
startMonthDays=calcMonthDays(starty, startm)
monthdays.push(monthday(starty,startm,startd, startMonthDays))
}

//ypologizw to prwto etos
    //an exw mono ena etos, ypologizw mexri to mhna poy thelw kai meta return
if (startm+1<12 & starty==endy & startm+1!=endm){
calcYear(starty, startm+1, endm)
return
   //alliws ypologize olo to ypoloipo etos kai synexizw
}else if(startm+1<12 & startm+1!=endm){
calcYear(starty,startm+1,12)
}

//ypologizw ta endiamesa eth
for (e=1;e<years.length-1;e++){
let thisYear=years[e]
calcYear(thisYear, 1, 12)
}

//ypologizw to teleutaio etos plhn tou teleytaiou mhna
if (starty!=endy & endm-1>0){
calcYear(endy, 1, endm-1)
}

//ypologizw ton teleutaio mhna
monthdays.push(monthday(endy,endm,1,endd))
console.log("Monthdays")
console.log(monthdays)
}

function correctMonthStart(){
let syear=document.getElementById("starty").value
let sday=document.getElementById("startd")
let smonth=document.getElementById("startm").value
let start=calcMonthDays(parseInt(syear),parseInt(smonth))
sday.setAttribute("max", start)
}

function correctMonthEnd(){
let eyear=document.getElementById("endy").value
let eday=document.getElementById("endd")
let emonth=document.getElementById("endm").value
let end=calcMonthDays(parseInt(eyear),parseInt(emonth))
console.log(end)
eday.setAttribute("max", end)
    }

function correctMonthFree(){
let fday=document.getElementById("freed")
let fmonth=document.getElementById("freem").value
fmonth=parseInt(fmonth)
    if (fmonth==2){
        fday.setAttribute("max", 28)
         } else if (fmonth==1 || fmonth==3 || fmonth==5 || fmonth==7 || fmonth==8 || fmonth==10 || fmonth==12){
        fday.setAttribute("max", "31")
     } else{
        fday.setAttribute("max", "30")
         }  
     }

function correctMonthSaint(){
        let sday=document.getElementById("saintd")
        let smonth=document.getElementById("saintm").value
        smonth=parseInt(smonth)
            if (smonth==2){
                sday.setAttribute("max", 28)
                 } else if (smonth==1 || smonth==3 || smonth==5 || smonth==7 || smonth==8 || smonth==10 || smonth==12){
                sday.setAttribute("max", "31")
             } else{
                sday.setAttribute("max", "30")
                 }  
             }

function apotelesma(){
    alldays=0
    monthdays=[]
    years=[]
    argies=[]
    sk=[]
   
    let fmonth=document.getElementById("freem").value
    let fday=document.getElementById("freed").value
    let fdayw=document.getElementById("freed")
    let saintmonth=document.getElementById("saintm").value
    let saintday=document.getElementById("saintd").value
     let saintdayw=document.getElementById("saintd")
    liberation=fmonth+fday
    citySaint=saintmonth+saintday
    fmonth=parseInt(fmonth)
    fday=parseInt(fday)
    saintmonth=parseInt(saintmonth)
    saintday=parseInt(saintday)
    let syear=document.getElementById("starty").value
    syear=parseInt(syear)
    let sday=document.getElementById("startd").value
    sday=parseInt(sday)
    let smonth=document.getElementById("startm").value  
    smonth=parseInt(smonth)
    let eyear=document.getElementById("endy").value
    eyear=parseInt(eyear)
    let eday=document.getElementById("endd").value
    eday=parseInt(eday)
    let emonth=document.getElementById("endm").value
    emonth=parseInt(emonth)
    let sMaxMonth=document.getElementById("startd").max
    sMaxMonth=parseInt(sMaxMonth)
    let eMaxMonth=document.getElementById("endd").max
    eMaxMonth=parseInt(eMaxMonth)
    console.log(eMaxMonth)
    let resultBox=document.getElementById("result")
    let bool=true
    resultBox.innerHTML=""
    resultText=""
    resultBox.style.border="1px solid #ec0909c9"
    if (syear<2000 || syear>2021 || eyear <2000 || eyear>2021){
    resultText+=" -Οι χρονολογίες μπορούν να είναι από το 2000 έως και το 2021. "+"<br>"
    bool=false
    }
    if (syear>eyear){
    resultText+= " -To έτος έναρξης δεν μπορεί να είναι μεγαλύτερo από το έτος λήξης"+"<br>"
    bool=false
    }else if (syear==eyear & smonth>emonth){
    resultText+= " -Ο μήνας έναρξης δεν μπορεί να είναι μεγαλύτερη από τον μήνα λήξης εντός του ίδιου έτους "   +"<br>"
    bool=false
    } else if(syear==eyear & smonth==emonth & sday>eday){
    resultText+= " -Η ημέρα έναρξης δεν μπορεί να είναι μεγαλύτερη από την ημέρα λήξης εντός του ίδιου μήνα "   +"<br>" 
    bool=false
    }
    if (smonth<1 || smonth>12){
        resultText+= " -Τρολ τιμή μήνα έναρξης"+"<br>"  
        bool=false
    }
    if (emonth<1 || emonth>12){
        resultText+= " -Τρολ τιμή μήνα λήξης"+"<br>"  
        bool=false
    }
    if (sday<1 || sday>parseInt(sMaxMonth)){
        resultText+= " -Μή αποδεκτές ημέρες = "+sday+"  για τον "+smonth+"ο του έτους "+syear+ ". Max ημερες= "+parseInt(sMaxMonth)+"<br>"
        console.log("start")
        bool=false  
    }
    if (eday<1 || eday>parseInt(eMaxMonth)){
        resultText+= " -Μή αποδεκτές ημέρες για τον "+emonth+"ο του έτους "+syear+ ". Max ημερες= "+parseInt(eMaxMonth)+"<br>"
        console.log("end")
    bool=false
    }
    if (fmonth>12 || fday>parseInt(document.getElementById(fdayw.max)) || fmonth<0 || fday<0){
        resultText+= " -Διορθώστε την ημερομηνία απελευθέρωσης"+"<br>"
        bool=false
    }
    if (fmonth!=0 & fday==0){
        resultText+= " -Διορθώστε την ημερομηνία απελευθέρωσης"+"<br>"
        bool=false  
    }
    if (fmonth==0 & fday!=0){
        resultText+= " -Διορθώστε την ημερομηνία απελευθέρωσης"+"<br>"
        bool=false  
    }

    if (saintmonth>12 || saintday>parseInt(document.getElementById(saintdayw.max)) || saintmonth<0 || saintday<0){
        resultText+= " -Διορθώστε την ημερομηνία Πολιούχου Αγίου"+"<br>"
        bool=false
    }
    if (saintmonth!=0 & saintday==0){
        resultText+= " -Διορθώστε την ημερομηνία Πολιούχου Αγίου"+"<br>"
        bool=false  
    }
    if (saintmonth==0 & saintday!=0){
        resultText+= " -Διορθώστε την ημερομηνία Πολιούχου Αγίου"+"<br>"
        bool=false  
    }

    if (bool==false){
    resultText+=" ΔΙΟΡΘΩΣΤΕ ΤΑ ΔΕΔΟΜΕΝΑ ΓΙΑ ΝΑ ΜΠΟΡΕΣΕΙ ΝΑ ΓΙΝΕΙ Ο ΥΠΟΛΟΓΙΣΜΟΣ"
    resultBox.innerHTML=resultText
    }else{
       
        calc(syear, eyear, smonth,emonth, sday,eday) 
        resultText=" -Συνολικές ημέρες= "+alldays+"<br>"
        resultText+=" -Εργάσιμες ημέρες= "+monthdays.reduce((a, b)=>a+b)+"<br>"
        resultBox.innerHTML=resultText
    
    let analyse=document.getElementById("analysis")
    console.log("argies kai sk")
    console.log(argies)
    console.log(sk)
    
    }

    

}
