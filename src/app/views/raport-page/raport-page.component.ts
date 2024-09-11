import { Component, OnInit } from '@angular/core';

//import {GeneralType} from "../../types/general.type";
import {PropertyType} from "../../types/property.type";
//import {Chart} from "chart.js";
import {Router} from "@angular/router";
import {ReportService} from "../../shared/services/report.service";
import {GettingPropertyType} from "../../types/gettingProperty.type";


@Component({
  selector: 'app-raport-page',
  templateUrl: './raport-page.component.html',
  styleUrls: ['./raport-page.component.scss']
})
export class RaportPageComponent implements OnInit {
  zeroSymptoms: [] | any = [];
  notBadSymptoms: [] | any = [];
  badSymptoms: [] | any = [];
  userId: string = '';
  worseSymptoms: [] | any = [];
  objectiveZeroSymptoms: GettingPropertyType  = [];
  objectiveNotBadSymptoms: GettingPropertyType  = [];

  objectiveBadSymptoms: GettingPropertyType =  [];
  objectiveWorseSymptoms: GettingPropertyType  = [];
  complaints: string = '';
  med_anamnesis: string = '';
  soc_anamnesis: string = '';
  adequancy: string = '';
  adequancyDescription: [] = [];
  contact: string = '';
  conversation: string = '';
  entranceDescription = [];
  speechInitiation: string = '';
  distance: string = '';
  orientation: string = '';
  orientationDescription = [];
  interest: string = '';
  reaction: string = '';
  criticality: string = '';
  expert_motivation: string = '';
  emotional_state: string = '';
  emotional_stateDescription = [];
  instructionUnderstanding: string = '';
  tasks: string = '';
  help: string = '';
  helpDescription = [];
  helpAccepting: string = '';
  workTempo: string = '';
  workDinamic: string = '';
  generalArray = [
    this.adequancy, this.adequancyDescription, this.contact, this.conversation, this.speechInitiation,
  ]
  nameOfUser: string | null = '';
  birthdayOfUser: string | null = '';
  examinationDate: string | null = '';
  visiual_gnosis: string = '';
  visiual_space_gnosis:string = '';
  visiual_symbolic_gnosis: string = '';
  sensor_gnosis: string = '';
  copy_gnosis: string = '';
  emotional_gnosis: string = '';
  auditional_gnosis: string = '';
  tactilo_gnosis: string = '';
  dinamic_pracsis: string = '';
  reciprok: string = '';
  position_pracsis: string = '';
  oral_pracsis: string = '';
  grafics_pracsis: string = '';
  constract_pracsis: string = '';
  choice_reaction: string = '';
  heads_test: string = '';
  listen_motor_test: string = '';
  eyes_test: string = '';

  audit_memory: string = '';
  audit_memory_2_3: string = '';
  visiual_memory: string = '';
  visial_space_memory: string = '';
  calculating: string = '';
  causal_link: string = '';
  solving_problems: string = '';
  solving_tasks: string = '';
  analog: string = '';

  exclude_4: string = '';
  pictures_understanding: string = '';
  proverbs: string = '';
  text_meaning: string = '';
  speech: string = '';
  shultePoints: string = '';
  memoryPoints: string = '';
  attention: string = '';

  resume: string = '';
  recommends: string = '';
  recommends_decription: string = '';
  resume_description: string = '';
  isRefresh: boolean = false;
  attentionPoint: string = '';
  programming: string = '';
  regulation: string = '';
  control: string = '';
  switchOfMovements: string = '';
  mobility: string = '';
  movementsDifficaltiesMinus: string = '';
  movementsDifficaltiesPlus: string = '';
  mentalProgramming: string = '';
  mentalProgramming2: string = '';
  logicProgramming: string = '';
  ram_value: string = '';
  minusMobility: string = '';
  sinus: string = '';
  sinus2:string = '';
  minusMobility2: string = '';
  programming2: string = '';
  regulation2: string = '';
  control2: string = '';
  switchOfMovements2: string = '';
  mobility2: string = '';
  programming3: string = '';
  regulation3: string = '';
  control3: string = '';
  switchOfMovements3: string = '';
  mobility3: string = '';
  solution = {
    sol_complaints: this.complaints,
    sol_med_anamnesis: this.med_anamnesis,
    sol_soc_anamnesis: this.soc_anamnesis,
    sol_adequancy: this.adequancy,
    sol_adequancyDescription: this.adequancyDescription,
    sol_contact: this.contact,
    sol_conversation: this.conversation,
    sol_speechInitiation: this.speechInitiation,
    sol_distance: this.distance,
    sol_orientation: this.orientation,
    sol_orientationDescription: this.orientationDescription,
    sol_interest: this.interest,
    sol_reaction: this.reaction,
    sol_criticality: this.criticality,
    sol_expert_motivation: this.expert_motivation,
    sol_emotional_state: this.emotional_state,
    sol_emotional_stateDescription: this.emotional_stateDescription,
    sol_instructionUnderstanding: this.instructionUnderstanding,
    sol_tasks: this.tasks,
    sol_help: this.help,
    sol_helpDescription: this.helpDescription,
    sol_helpAccepting: this.helpAccepting,
    sol_workTempo: this.workTempo,
    sol_workDinamic: this.workDinamic,
    sol_nameOfUser: this.nameOfUser,
    sol_birthdayOfUser: this.birthdayOfUser,
    sol_examinationDate: this.examinationDate,
    sol_visiual_gnosis: this.visiual_gnosis,
    sol_visiual_symbolic_gnosis: this.visiual_symbolic_gnosis,
    sol_sensor_gnosis: this.sensor_gnosis,
    sol_copy_gnosis: this.copy_gnosis,
    sol_emotional_gnosis: this.emotional_gnosis,
    sol_auditional_gnosis: this.auditional_gnosis,
    sol_tactilo_gnosis: this.tactilo_gnosis,
    sol_dinamic_pracsis: this.dinamic_pracsis,
    sol_reciprok: this.reciprok,
    sol_position_pracsis: this.position_pracsis,
    sol_oral_pracsis: this.oral_pracsis,
    sol_grafics_pracsis: this.grafics_pracsis,
    sol_constract_pracsis: this.constract_pracsis,
    sol_choice_reaction: this.choice_reaction,
    sol_heads_test: this.heads_test,
    sol_listen_motor_test: this.listen_motor_test,
    sol_eyes_test: this.eyes_test,
    sol_audit_memory: this.audit_memory,
    sol_audit_memory_2_3: this.audit_memory_2_3,
    sol_visiual_memory: this.visiual_memory,
    sol_visial_space_memory: this.visial_space_memory,
    sol_calculating: this.calculating,
    sol_causal_link: this.causal_link,
    sol_solving_problems: this.solving_problems,
    sol_solving_tasks: this.solving_tasks,
    sol_analog: this.analog,
    sol_exclude_4: this.exclude_4,
    sol_pictures_understanding: this.pictures_understanding,
    sol_proverbs: this.proverbs,
    sol_text_meaning: this.text_meaning,
    sol_speech: this.speech,
    sol_shultePoints: this.shultePoints,
    sol_memoryPoints: this.memoryPoints,
    sol_attention: this.attention,
    sol_recommends_decription: this.recommends_decription,
    sol_resume_description: this.resume_description,
    sol_attentionPoint: this.attentionPoint,
    sol_regulation: this.regulation,
  }


  constructor(private router: Router, private reportService: ReportService) {
  }

  ngOnInit(): void {
    let user_id = localStorage.getItem('userId')
    if (user_id) {
      console.log(user_id)
      // this.userId = JSON.parse (user_id);
    }
    let user_info = localStorage.getItem('user')
    if (user_info) {
      let info = JSON.parse(user_info)
      this.nameOfUser = info.userName
      console.log(this.nameOfUser)
      this.birthdayOfUser = info.userBirthday
      console.log(this.birthdayOfUser)
    }
    let shulte = localStorage.getItem('shulte')
    console.log(shulte)
    if (shulte) {
      this.shultePoints = Object.values(JSON.parse(shulte)).toString()
      console.log(this.shultePoints)
    }
    let memPoints = localStorage.getItem('memoryPoints')
    console.log(memPoints)
    if (memPoints) {
      this.memoryPoints = Object.values(JSON.parse(memPoints)).toString();
      console.log(this.memoryPoints)
    }
    let speechItem = localStorage.getItem('speech')
    if (speechItem) {
      this.speech = speechItem.toString()
    }

    this.examinationDate = localStorage.getItem('examination')
    console.log(this.examinationDate)
    let anamnesisInfo = localStorage.getItem('generalAnamnesis')
    if (anamnesisInfo) {
      let anamnesisInfoParsed = JSON.parse(anamnesisInfo)
      this.complaints = anamnesisInfoParsed.userComplaints;
      this.med_anamnesis = anamnesisInfoParsed.userMedAnam;
      this.soc_anamnesis = anamnesisInfoParsed.userSocAnam

    }
    //распаковка данных общей части протокола
    let zeroSymptoms: string | null = localStorage.getItem('zero')
    if (zeroSymptoms && zeroSymptoms.length >0){
      this.zeroSymptoms = JSON.parse(zeroSymptoms)
      console.log(this.zeroSymptoms)
    }

    let notBadSymptoms: string | null = localStorage.getItem('notBad')
    if (notBadSymptoms && notBadSymptoms.length >0) {
      this.notBadSymptoms = JSON.parse(notBadSymptoms)
      console.log( this.notBadSymptoms)
    }

    let badSymptoms = localStorage.getItem('bad')
    console.log(typeof badSymptoms)
    if (badSymptoms && badSymptoms.length >0) {
      this.badSymptoms = JSON.parse(badSymptoms)
    }

    let worseSymptoms: string | null = localStorage.getItem('worse')
    if (worseSymptoms && worseSymptoms.length >0) {
      this.worseSymptoms = JSON.parse(worseSymptoms)
      console.log(this.worseSymptoms)
    }

    if (this.zeroSymptoms || this.notBadSymptoms || this.badSymptoms || this.worseSymptoms) {
      this.giveValuesForMakingRaport();
    }

    //распаковка данных объективной части протокола
    let objectiveZeroSymptoms = localStorage.getItem('zeroResults');
    console.log(objectiveZeroSymptoms);
    if (objectiveZeroSymptoms && objectiveZeroSymptoms.length >0){
      this.objectiveZeroSymptoms = JSON.parse(objectiveZeroSymptoms);
      console.log(this.objectiveZeroSymptoms);


    }



    let objective_not_badSymptoms = localStorage.getItem('notBadResults');
    console.log(objective_not_badSymptoms);
    if (objective_not_badSymptoms && objective_not_badSymptoms.length > 0 && !objective_not_badSymptoms.includes('attentionChild')) {
      this.objectiveNotBadSymptoms = JSON.parse(objective_not_badSymptoms);
      console.log(this.objectiveNotBadSymptoms);
      let descriptionsFromNotBadSymptomsArr = this.objectiveNotBadSymptoms.flat(1).map(item => item.description)
      console.log(descriptionsFromNotBadSymptomsArr)
      let descriptionsFromNotBadSymptomsArr_flatted = descriptionsFromNotBadSymptomsArr.flat(1)
      console.log(descriptionsFromNotBadSymptomsArr_flatted)
      let ram = descriptionsFromNotBadSymptomsArr_flatted.filter(item => item.trimEnd() === 'трудности удержания промежуточного результата' || item.trimEnd() === 'контаминации обеих групп'  ||
        item.trimEnd() === 'ошибки в единицах' );
      console.log(ram);
      if (ram.length >= 1){
        this.ram_value = 'характеризуется недостаточностью оперативной памяти'
        console.log( this.ram_value)
      }
      let programMovementsProblems = descriptionsFromNotBadSymptomsArr_flatted.filter(item => item.trimEnd() === 'упрощение программы' || item.trimEnd() === 'расширение программы');
      console.log( programMovementsProblems);
      if ( programMovementsProblems.length >= 1){
        this.programming = 'на уровне движений и действий'
        console.log( this.programming)
      }
      let programMentalProblems = descriptionsFromNotBadSymptomsArr_flatted.filter(item =>  item.trimEnd() == 'трудности построения алгоритма решения задачи'
        || item.trimEnd() == 'не может построить фигуру самостоятельно по картинке, необходима организующая помощь');
      console.log( programMentalProblems);
      if ( programMentalProblems.length >= 1){
        this.mentalProgramming = 'психической деятельности'
        console.log( this.mentalProgramming)
      }
      let programLogicProblems = descriptionsFromNotBadSymptomsArr_flatted.filter(item =>  item.trimEnd() === 'трудности переноса' || item.trimEnd() === 'исключает по ситуативному признаку');
      console.log( programLogicProblems);
      if ( programLogicProblems.length >= 1){
        this.logicProgramming = 'характеризуется недостаточностью в звене программировани психической деятельности'
        console.log( this.programming)
      }
      let dinamicProblems = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) =>  problem.trimEnd() === 'трудности переключения с одного движения на другое' || problem.trimEnd() === 'с отрывом руки от листа'
        || problem.trimEnd() === 'поочередное выполнение' || problem.trimEnd() === 'выполнение с отставанием одной руки' || problem.trimEnd() === 'трудности переключения с одной позы на другую');
      if (dinamicProblems.length >= 1){
        this.switchOfMovements = 'трудностями переключения'
        console.log(  this.switchOfMovements)
      }
      let kineticProblemsMinus = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'персеверации' ||  problem.trimEnd() === 'скандированность'
        || problem.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
      if (kineticProblemsMinus.length >= 1){
        this.movementsDifficaltiesMinus = 'трудностями переключения'
        console.log(  this.movementsDifficaltiesMinus)
      }
      let kineticProblemsPlus = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'лишние импульсы' || problem.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
      if ( kineticProblemsPlus.length >= 1){
        this.movementsDifficaltiesPlus = 'трудностями переключения'
        console.log(  this.movementsDifficaltiesPlus)
      }

      let activateProblemsSlow = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'инактивность' || problem.trimEnd() === 'аспонтанность'  );
      if (activateProblemsSlow.length >= 1){
        this.mobility = 'инертностью психических процессов'
      }
      let controlProblems = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'эхопраксия' || problem.trimEnd() === 'зеркальность' || problem.trimEnd() === 'импульсивность' || problem.trimEnd() === 'псевдоагнозии' || problem.trimEnd() === ' конфабуляции');
      if (controlProblems.length >= 1){
        this.control = 'трудностями контроля'
        console.log( this.control)
      }
      let activateProblemsMinus = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'истощаемость');
      if (activateProblemsMinus.length >= 1){
        this.minusMobility = 'истощаемостью'
        console.log( this.control)
      }
     // );
    }

    let objective_badSymptoms = localStorage.getItem('badResults')
    console.log(objective_badSymptoms)
    if (objective_badSymptoms && objective_badSymptoms.length > 0) {
      this.objectiveBadSymptoms = JSON.parse(objective_badSymptoms);
      console.log(this.objectiveBadSymptoms)
      let descriptionsFromBadSymptomsArr = this.objectiveBadSymptoms.flat(1).map(item => item.description)
      console.log(descriptionsFromBadSymptomsArr)
     let descriptionsFromBadSymptomsArr_flatted = descriptionsFromBadSymptomsArr.flat(1)
      console.log(descriptionsFromBadSymptomsArr_flatted)

      //функции программирования и контроля, серийная организация движений и действий
      let dinamicLowProblemsArray_bad = [];
      let dinamicStuckProblems_bad = [];
      let programmingActionsProblems_bad = [];
      let ram = descriptionsFromBadSymptomsArr_flatted.filter(item => item.trimEnd() === 'трудности удержания промежуточного результата' || item.trimEnd() === 'контаминации обеих групп'  ||
        item.trimEnd() === 'ошибки в единицах' );
      console.log(ram);
      if (ram.length >= 1){
        this.ram_value = 'характеризуется недостаточностью оперативной памяти'
        console.log( this.ram_value)
      }
      let programMovementsProblems = descriptionsFromBadSymptomsArr_flatted.filter(item => item.trimEnd() === 'упрощение программы' || item.trimEnd() === 'расширение программы');
      console.log( programMovementsProblems);
      if ( programMovementsProblems.length >= 1){
        this.programming2 = 'на уровне движений и действий'
        console.log( this.programming)
      }
      let programMentalProblems = descriptionsFromBadSymptomsArr_flatted .filter(item =>  item.trimEnd() === 'трудности построения алгоритма решения задачи' ||
        item.trimEnd() === 'не может построить фигуру самостоятельно по картинке, необходима организующая помощь');
      console.log( programMentalProblems);
      if ( programMentalProblems.length >= 1){
        programmingActionsProblems_bad.push(programMentalProblems.toString())
      }
      let programLogicProblems = descriptionsFromBadSymptomsArr_flatted.filter(item =>  item.trimEnd() === 'трудности переноса' || item.trimEnd() === 'исключает по ситуативному признаку');
      console.log( programLogicProblems);
      if ( programLogicProblems.length >= 1){
        programmingActionsProblems_bad.push(programLogicProblems.toString())
      }
      if (programmingActionsProblems_bad.length >=1){
          this.mentalProgramming2 = 'на уровне программирования психической деятельности'
      }


      //  this.logicProgramming = 'характеризуется недостаточностью в звене программировани психической деятельности'

      let dinamicProblems = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) =>  problem.trimEnd() === 'трудности переключения с одного движения на другое' || problem.trimEnd() === 'с отрывом руки от листа'
        || problem.trimEnd() === 'поочередное выполнение' || problem.trimEnd() === 'выполнение с отставанием одной руки' || problem.trimEnd() === 'трудности переключения с одной позы на другую');
      if (dinamicProblems.length >= 1){
        dinamicStuckProblems_bad.push(dinamicProblems.toString())
      }
      let kineticProblemsMinus = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'персеверации' ||  problem.trimEnd() === 'скандированность'
        || problem.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
      if (kineticProblemsMinus.length >= 1){
        dinamicStuckProblems_bad.push(kineticProblemsMinus.toString())
      //  this.movementsDifficaltiesMinus = 'трудностями переключения'
     //   console.log(  this.switchOfMovements)
      }
      let kineticProblemsPlus = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'лишние импульсы' || problem.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
      if ( kineticProblemsPlus.length >= 1){
        dinamicStuckProblems_bad.push(kineticProblemsPlus.toString())
       // this.movementsDifficaltiesPlus = 'трудностями переключения'
      //  console.log(  this.switchOfMovements)
      }
      if (dinamicStuckProblems_bad.length >= 1){
        this.switchOfMovements = 'трудностями переключения'
      }

      let activateProblemsSlow = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'инактивность' || problem.trimEnd() === 'аспонтанность'  );
      if (activateProblemsSlow.length >= 1){
        this.mobility = 'выраженной инертностью психических процессов'
      }
      let controlProblems = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'эхопраксия' || problem.trimEnd() === 'зеркальность' || problem.trimEnd() === 'импульсивность'
        || problem.trimEnd() === 'псевдоагнозии' || problem.trimEnd() === ' конфабуляции');
      if (controlProblems.length >= 1){
        this.control2 = 'трудностями контроля'
        console.log( this.control2)
      }
      //нейродинамика

      let activateProblemsMinus = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'истощаемость');
      if (activateProblemsMinus.length >= 1){
        dinamicLowProblemsArray_bad.push(activateProblemsMinus.toString())
        this.minusMobility2 = 'истощаемостью'
        //console.log( this.minusMobility)
      }
      let sinusProblems = descriptionsFromBadSymptomsArr_flatted.filter((problem:string) => problem.trimEnd() === 'флуктуации' )
      if (sinusProblems.length >=1){
        dinamicLowProblemsArray_bad.push(sinusProblems.toString())
        this.sinus2 = 'флуктуациями'
      }
    }


    let objective_worseSymptoms = localStorage.getItem('worseResults')
    if (objective_worseSymptoms && objective_worseSymptoms.length > 0 ) {
      this.objectiveWorseSymptoms = JSON.parse(objective_worseSymptoms);
      console.log(this.objectiveWorseSymptoms)
      let descriptionsFromWorseSymptomsArr = this.objectiveWorseSymptoms.flat(1).map(item => item.description)
      console.log(descriptionsFromWorseSymptomsArr)
      let descriptionsFromWorseSymptomsArr_flatted = descriptionsFromWorseSymptomsArr.flat(1)
      console.log(descriptionsFromWorseSymptomsArr_flatted)
      let programProblems = descriptionsFromWorseSymptomsArr_flatted.filter(item => item.trimEnd() === 'упрощение программы' || item.trimEnd() === 'расширение программы'
        || item.trimEnd() === 'эхопраксия' || item.trimEnd() === 'трудности построения алгоритма решения задачи' ||
        item.trimEnd() === 'не может построить фигуру самостоятельно по картинке, необходима организующая помощь'
        || item.trimEnd() === 'ошибки в единицах' || item.trimEnd() === 'трудности переноса' || item.trimEnd() === 'исключает по ситуативному признаку');
      console.log( programProblems);
      if ( programProblems.length >= 1){
        this.programming3 = 'характеризуется грубой недостаточностью в звене программировани психической деятельности'
        console.log( this.programming)
      }
      let dinamicProblems = descriptionsFromWorseSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'персеверации'
        || problem.trimEnd() === 'трудности переключения с одного движения на другое' || problem.trimEnd() === 'скандированность' || problem.trimEnd() === 'с отрывом руки от листа'
        || problem.trimEnd() === 'поочереное выполнение' || problem.trimEnd() === 'выполнение с отсаванием одной руки'
        || problem.trimEnd() === 'трудности переключения с одной позы на другую' || problem.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
      if (dinamicProblems.length >= 1){
        this.switchOfMovements3 = 'грубыми трудностями переключения'
        console.log( this.switchOfMovements)
      }
      let activateProblems = descriptionsFromWorseSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'инактивность' || problem.trimEnd() === 'аспонтанность'  );
      if (activateProblems.length >= 1){
        this.mobility3 = 'грубой инертностью психических процессов'
        console.log( this.mobility3);
      }
      let controlProblems = descriptionsFromWorseSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'эхопраксия' || problem.trimEnd() === 'зеркальность'
        || problem.trimEnd() === 'импульсивность' || problem.trimEnd() === 'лишние импульсы'|| problem.trimEnd() === 'псевдоагнозии' || problem.trimEnd() === 'контаминации обеих групп'
        || problem.trimEnd() === ' конфабуляции');
      if (controlProblems.length >= 1){
        this.control3 = 'грубыми нарушениями контроля'
        console.log(  this.control3);
      }
    }
    if (this.objectiveBadSymptoms || this.objectiveWorseSymptoms || this.objectiveNotBadSymptoms) {
      this.giveValuesForMakingRaport()
    }

  }

  giveValuesForMakingRaport() {
    //обработка 0 баллов общий блок
    if (this.zeroSymptoms && this.zeroSymptoms.length > 0 ){
      this.zeroSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('contact')
        return this.contact = 'доступен';
      });
      let entranceItem = this.zeroSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')
      console.log(entranceItem)
      if (entranceItem) {
        this.entranceDescription = entranceItem.description.toString().toLowerCase()? entranceItem.description.toString().toLowerCase() : 'охотно';
        console.log(this.entranceDescription);
      }
      //this.badSymptoms.find((a: PropertyType) => {
      //   a.hasOwnProperty('entranceToConversation')
      //  return this.speechInitiation = 'снижена';
      // });
      this.zeroSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('orientation')
        return this.orientation = 'Ориентация в месте, времени, собственной личности сохранна';
      });
      this.zeroSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('criticality')
        return this.criticality = 'Критичность сохранна';
      });
      this.zeroSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('adequancy')
        return this.adequancy = 'адекватно ситуации';
      });
      //подумать гла взять данные для нарушения дистанции
      this.zeroSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('exportMotivation')
        return this.expert_motivation = 'формируется';
      });
      this.zeroSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('interest')
        return this.interest = 'Ребенок заинтересован в результатах выполнения заданий';
      });

      let emotionalStateItem = this.zeroSymptoms.find((a: PropertyType) => a.name === 'emotionalState')
      if (emotionalStateItem && emotionalStateItem.description && emotionalStateItem.description.length > 0) {
        /*  let reactionsRemovw = ['Реакции на успех/неуспех чрезмерные']
          let reactions = emotionalStateItem.description.toString()
            .split(/,+/)
            .filter((word:string) => reactionsRemovw.includes(word))
          this.reaction = reactions;*/
        this.emotional_stateDescription = emotionalStateItem.description.toString().toLowerCase();
      }
      this.zeroSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('following instructions')
        return this.instructionUnderstanding = 'усваивает чаще с первого раза, самостоятельно удерживает в процессе выполнения заданий';
      });
      this.zeroSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('doing tasks')
        return this.tasks = 'выполняет все и в полном объеме';
      });

      let workProperties = this.zeroSymptoms.find((a: PropertyType) => a.name === 'perfomance');
      if (workProperties &&  workProperties.descriptionTempo && workProperties.descriptionTempo.length >0 && workProperties.descriptionDinamic && workProperties.descriptionDinamic.length >0) {
        this.workTempo = workProperties.descriptionTempo.toString();
        this.workDinamic = workProperties.descriptionDinamic.toString();
      } else {
        this.workTempo ='нормативный';
        this.workDinamic = 'стабильная';
      }
     // let workDinamic = this.zeroSymptoms.find((a: PropertyType) => a.name === 'perfomance');


    }

  //обработка 1 балл общий блок
    if (this.notBadSymptoms && this.notBadSymptoms.length > 0){
      this.notBadSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('contact')
        return this.contact = 'доступен, требуется некоторое время';
      });
      let entranceItem = this.notBadSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')
      console.log(entranceItem)
      if (entranceItem) {
        this.entranceDescription = entranceItem.description.toString().toLowerCase();
        console.log(this.entranceDescription);
      }
      //this.badSymptoms.find((a: PropertyType) => {
      //   a.hasOwnProperty('entranceToConversation')
      //  return this.speechInitiation = 'снижена';
      // });
      this.notBadSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('orientation')
        return this.orientation = 'Общая осведомленность соответствует возрасту';
      });
      let orientationItem = this.notBadSymptoms.find((a: PropertyType) => a.name === 'orientation')
      if (orientationItem && orientationItem.description && orientationItem.description.length >0) {
        this.orientationDescription = orientationItem.description.toString().toLowerCase();
      }

      this.notBadSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('criticality')
        return this.criticality = 'Критичность сохранна,необходима незначительная регулирующая помощь';
      });
      this.notBadSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('adequancy')
        return this.adequancy = 'в целом адекватно';
      });
      //подумать гла взять данные для нарушения дистанции
      let adequancyItem = this.notBadSymptoms.find((item: PropertyType) => item.name === 'adequancy')
      console.log(adequancyItem)
      if (adequancyItem && adequancyItem.description && adequancyItem.description.length > 0) {
        this.adequancyDescription = adequancyItem.description.toString().toLowerCase();
      }
      console.log(this.adequancyDescription)
      this.notBadSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('exportMotivation')
        return this.expert_motivation = 'формируется';
      });
      this.notBadSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('interest')
        return this.interest = 'Ребенок заинтересован в результатах выполнения заданий';
      });

      let emotionalStateItem = this.notBadSymptoms.find((a: PropertyType) => a.name === 'emotionalState')
      if (emotionalStateItem && emotionalStateItem.description && emotionalStateItem.description.length > 0) {
        /*  let reactionsRemovw = ['Реакции на успех/неуспех чрезмерные']
          let reactions = emotionalStateItem.description.toString()
            .split(/,+/)
            .filter((word:string) => reactionsRemovw.includes(word))
          this.reaction = reactions;*/
        this.emotional_stateDescription = emotionalStateItem.description.toString().toLowerCase();
      }
      this.notBadSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('following instructions')
        return this.instructionUnderstanding = 'усваивает со 2-го-3-го раза';
      });
      this.notBadSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('doing tasks')
        return this.tasks = 'выполняет все и  в полном объеме,с самокоррекцией';
      });
      let helpItem = this.notBadSymptoms.find((a: PropertyType) => a.name === 'accepting help')
      if (helpItem && helpItem.descriptionGeneral && helpItem.descriptionGeneral.length > 0) {
        this.helpDescription = helpItem.descriptionGeneral.toString();
      }
      if (helpItem && helpItem.descriptionNatureOfHelp && helpItem.descriptionNatureOfHelp.length > 0) {
        this.helpDescription = helpItem.descriptionNatureOfHelp.toString();
      }
      if (helpItem && helpItem.descriptionWhereHelp && helpItem.descriptionWhereHelp.length > 0) {
        this.helpDescription = helpItem.descriptionWhereHelp.toString();
      }
      if (helpItem && helpItem.descriptionEffectOfHelp && helpItem.descriptionEffectOfHelp.length > 0) {
        this.helpDescription = helpItem.descriptionEffectOfHelp.toString();
      }

      let workProperties = this.notBadSymptoms.find((a: PropertyType) => a.name === 'perfomance');
      if (workProperties && workProperties.descriptionTempo) {
        this.workTempo = workProperties.descriptionTempo.length >0? workProperties.descriptionTempo.toString() : '';
      }
      if (workProperties && workProperties.descriptionDinamic){
        this.workDinamic = workProperties.descriptionDinamic.length >0? workProperties.descriptionDinamic.toString() : '';
      }
    }

    //обработка 2 балла общий блок
    if (this.badSymptoms && this.badSymptoms.length > 0) {
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('contact')
        return this.contact = 'доступен частично. Контакт неустойчивый';
      });
    /*  this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('entranceToConversation')
        return this.conversation = 'неохотно';
      });*/
      let entranceItem = this.badSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')
      console.log(entranceItem)
      if (entranceItem && entranceItem.description && entranceItem.description.length >0) {
        this.entranceDescription = entranceItem.description.toString().toLowerCase();
        console.log(this.entranceDescription);
      }
      //this.badSymptoms.find((a: PropertyType) => {
     //   a.hasOwnProperty('entranceToConversation')
      //  return this.speechInitiation = 'снижена';
     // });
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('orientation')
        return this.orientation = 'Общая осведомленность снижена';
      });
      let orientationItem = this.badSymptoms.find((a: PropertyType) => a.name === 'orientation')
      if (orientationItem && orientationItem.description && orientationItem.description.length >0) {
        this.orientationDescription = orientationItem.description.toString().toLowerCase();
      }


      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('criticality')
        return this.criticality = 'Критичность снижена';
      });
       this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('adequancy')
        return this.adequancy = 'неадекватно';
      });
      //подумать гла взять данные для нарушения дистанции
      let adequancyItem = this.badSymptoms.find((item: PropertyType) => item.name === 'adequancy')
      console.log(adequancyItem)
      if (adequancyItem && adequancyItem.description && adequancyItem.description.length >0) {
        this.adequancyDescription = adequancyItem.description.toString().toLowerCase();
      }
      console.log(this.adequancyDescription)
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('exportMotivation')
        return this.expert_motivation = 'снижена';
      });
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('interest')
        return this.interest = 'Заинтересованность в результатах выполнения заданий снижена';
      });
     /* this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('emotionalState')
        return this.emotionalState = 'Общая осведомленность снижена';
      });*/
      let emotionalStateItem = this.badSymptoms.find((a: PropertyType) => a.name === 'emotionalState')
      if (emotionalStateItem && emotionalStateItem.description && emotionalStateItem.description.length >0) {
      /*  let reactionsRemovw = ['Реакции на успех/неуспех чрезмерные']
        let reactions = emotionalStateItem.description.toString()
          .split(/,+/)
          .filter((word:string) => reactionsRemovw.includes(word))
        this.reaction = reactions;*/
        this.emotional_stateDescription = emotionalStateItem.description.toString().toLowerCase();
      }
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('following instructions')
        return this.instructionUnderstanding = 'усваивает со 2-го-3-го раза с развернутым разъяснением';
      });
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('doing tasks')
        return this.tasks = 'выполняет не все и не в полном объеме';
      });

      let helpItem = this.badSymptoms.find((a: PropertyType) => a.name === 'accepting help')
      if (helpItem && helpItem.descriptionGeneral && helpItem.descriptionGeneral.length > 0) {
        this.helpDescription = helpItem.descriptionGeneral.toString();
      }
      if (helpItem && helpItem.descriptionNatureOfHelp && helpItem.descriptionNatureOfHelp.length > 0) {
        this.helpDescription = helpItem.descriptionNatureOfHelp.toString();
      }
      if (helpItem && helpItem.descriptionWhereHelp && helpItem.descriptionWhereHelp.length > 0) {
        this.helpDescription = helpItem.descriptionWhereHelp.toString();
      }
      if (helpItem && helpItem.descriptionEffectOfHelp && helpItem.descriptionEffectOfHelp.length > 0) {
        this.helpDescription = helpItem.descriptionEffectOfHelp.toString();
      }


      let workProperties = this.badSymptoms.find((a: PropertyType) => a.name === 'perfomance');
      if (workProperties && workProperties.descriptionTempo) {
        this.workTempo = workProperties.descriptionTempo.length >0? workProperties.descriptionTempo.toString() : '';
      }
      if (workProperties && workProperties.descriptionDinamic ){
        this.workDinamic = workProperties.descriptionDinamic.length >0? workProperties.descriptionDinamic.toString() : '';
      }
     }
//обработка 3 балла общий блок
    if (this.worseSymptoms && this.worseSymptoms.length >0) {
    /*  this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('orientation')
        return this.orientation = 'Дезориентирован';
      });*/
      let orientationItem = this.worseSymptoms.find((a: PropertyType) => a.name === 'orientation')
        console.log(orientationItem)
        console.log(orientationItem?.description)
      if (orientationItem && orientationItem.description && orientationItem.description.length >0) {
        this.orientation = 'Дезориентирован';
        this.orientationDescription = orientationItem.description.toString().toLowerCase();
      }
      this.worseSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('contact')
        return this.contact = 'недоступен';
      });
      let entranceItem = this.worseSymptoms.find((a: PropertyType) => a.name === 'entranceToConversation')
      console.log(entranceItem)

      if (entranceItem && entranceItem.description && entranceItem.description.length >0) {
        this.entranceDescription = entranceItem.description.toString().toLowerCase();
        console.log(this.entranceDescription);
      }
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('criticality')
        return this.criticality = 'Безразличен к своему состоянию, поведению и оценкам взрослого';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('adequancy')
        return this.adequancy = 'неадекватно';
      });
      let worseAdequancy = this.worseSymptoms.find((a:PropertyType) => a.name === 'adequancy');
    console.log(worseAdequancy)
     /* if (worseAdequancy && worseAdequancy.description){
        this.adequancyDescription = worseAdequancy.description.length >0? worseAdequancy.description.toString().toLowerCase() : '';
      }*/

      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('exportMotivation')
        return this.expert_motivation = 'не формируется';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('following instructions')
        return this.instructionUnderstanding = ' не усваивает даже с массированной помощью ';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('doing tasks')
        return this.tasks = 'не может выпонить даже с массированной помощью';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('accepting help')
        return this.helpAccepting = 'не принимает';
      });

      let workProperties = this.worseSymptoms.find((a: PropertyType) => a.name === 'perfomance');
      console.log(workProperties)
    //}
   /*   if (workProperties && workProperties.descriptionTempo) {
        this.workTempo = workProperties.descriptionTempo.length >0? workProperties.descriptionTempo.toString() : '';
      }
      if (workProperties && workProperties.descriptionDinamic ){
        this.workDinamic = workProperties.descriptionDinamic.length >0? workProperties.descriptionDinamic.toString() : '';
      }*/
  }

    if ( this.objectiveNotBadSymptoms && this.objectiveNotBadSymptoms.length >0){
      let namesArray3: any = this.objectiveNotBadSymptoms.flat(1).map(item => item.name);

      console.log(namesArray3);
      namesArray3.forEach((name:string) => {
        const item: any = this.objectiveNotBadSymptoms.flat(1).find(item => item.name === name);
        if (item) {
          switch (name) {
            case 'dinamicPracsis':
              //   let dinamic_pracsis = item.description.toString();
              //    let remove = 'персеверации';
              //  this.dinamic_pracsis = dinamic_pracsis.split(remove)
              this.dinamic_pracsis = item.description.toString();
              break;
            case 'reciproknaya':
              this.reciprok = item.description.toString();
              break;
            case  'positionsPracsis':
              this.position_pracsis = item.description.toString();
              break;
            case 'grafics':
              this.grafics_pracsis = item.description.toString();
              break;
            case 'hed':
              this.heads_test = item.description.toString();
              break;
            case 'ears_motors':
              this.listen_motor_test = item.description.toString();
              break;
            case 'eyes':
              this.eyes_test = item.description.toString();
              break;
            case 'constructor':
              this.constract_pracsis = item.description.toString();
              break;
            case 'choise_reaction':
              this.choice_reaction = item.description.toString();
              break;
            case 'vision gnosis':
              this.visiual_gnosis = item.description.toString();
              break;
            case 'vision_space gnosis':
              this.visiual_space_gnosis = item.description.toString();
              break;
            case 'vision_symbolic gnosis':
              this.visiual_symbolic_gnosis = item.description.toString();
              break;
            case 'auditory gnosis':
              this.auditional_gnosis = item.description.toString();
              break;
            case 'sensor gnosis':
              this.sensor_gnosis = item.description.toString();
              break;
            case 'emotional gnosis':
              this.emotional_gnosis = item.description.toString();
              break;
            case 'copy gnosis':
              this.copy_gnosis = item.description.toString();
              break;
            case 'vision_space_memory':
              this.visial_space_memory = item.description.toString();
              break;
            case 'vision_memory':
              this.visiual_memory = item.description.toString();
              break;
            case 'audit_memory':
              this.audit_memory = item.description.toString();
              break;
            case 'audit_memory_2_3':
              this.audit_memory_2_3 = item.description.toString();
              break;
            case 'serial counting':
              let calculating = item.description.toString();
              let removefromcalculating = ["флуктуации", "аспонтанность","импульсивность", "персеверации"];
              let removePsyMoveFromcalculating = ['персеверации'];
              let removeControlFromcalculating = ['импульсивность'];
              let removeDinamicFromcalculating = ['флуктуации'];
              this.calculating = calculating
                .split(/,+/)
                .filter((word:string) => !removefromcalculating.includes(word))
                .join(' ');
              let control_in_calculating = calculating.split(/,+/).filter((word:string) => removeControlFromcalculating.includes(word)).join(' ');
              if (control_in_calculating){
                this.control = 'трудностями контроля';
              }
              let psymove_in_calculating = calculating.split(/,+/).filter((word:string) => removePsyMoveFromcalculating.includes(word)).join(' ');
              if (psymove_in_calculating){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_calculating = calculating.split(/,+/).filter((word:string) => removeDinamicFromcalculating.includes(word)).join(' ');
              if (dinamic_in_calculating){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving tasks':
              let solving_tasks = item.description.toString();
              let removefromsolving_tasks = ["флуктуации", "аспонтанность","импульсивность", "персеверации"];
              let removePsyMoveFromsolving_tasks = ['персеверации'];
              let removeControlFromsolving_tasks = ['импульсивность'];
              let removeDinamicFromsolving_tasks = ['флуктуации'];
              this.solving_tasks = solving_tasks
                .split(/,+/)
                .filter((word:string) => !removefromsolving_tasks.includes(word))
                .join(' ');
              let control_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeControlFromsolving_tasks.includes(word)).join(' ');
              if (control_in_solving_tasks){
                this.control = 'трудностями контроля';
              }
              let psymove_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removePsyMoveFromsolving_tasks.includes(word)).join(' ');
              if (psymove_in_solving_tasks){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_tasks = solving_tasks.split(/,+/).filter((word:string) => removeDinamicFromsolving_tasks.includes(word)).join(' ');
              if (dinamic_in_solving_tasks){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving problems':
              let solving_problems = item.description.toString();
              let remove_problems = ["флуктуации", "аспонтанность","импульсивность", "персеверации"];
              let removePsyMove = ['персеверации'];
              let removeControl = ['импульсивность'];
              let removeDinamic = ['флуктуации'];
              this.solving_problems = solving_problems
                .split(/,+/)
                .filter((word:string) => !remove_problems.includes(word))
                .join(' ');
              let control_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeControl.includes(word)).join(' ');
              if (control_in_solving_problems){
                this.control = 'трудностями контроля';
              }
              let psymove_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removePsyMove.includes(word)).join(' ');
              if (psymove_in_solving_problems){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_solving_problems = solving_problems.split(/,+/).filter((word:string) => removeDinamic.includes(word)).join(' ');
              if (dinamic_in_solving_problems){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving analog':
              let analog = item.description.toString();
              let removefromAnalog = ["флуктуации", "аспонтанность","импульсивность", "персеверации"];
              let removePsyMoveFromAnalog = ['персеверации'];
              let removeControlFromAnalog = ['импульсивность'];
              let removeDinamicFromAnalog = ['флуктуации'];
              this.analog =  analog
                .split(/,+/)
                .filter((word:string) => !removefromAnalog.includes(word))
                .join(' ');
              let control_in_analog = analog.split(/,+/).filter((word:string) => removeControlFromAnalog.includes(word)).join(' ');
              if (control_in_analog){
                this.control = 'трудностями контроля';
              }
              let psymove_in_analog = analog.split(/,+/).filter((word:string) => removePsyMoveFromAnalog.includes(word)).join(' ');
              if (psymove_in_analog){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_analog = analog.split(/,+/).filter((word:string) => removeDinamicFromAnalog.includes(word)).join(' ');
              if (dinamic_in_analog){
                this.sinus = 'флуктуациями';
              }
              break;
            case 'solving exclude':
              let exclude_4 = item.description.toString();
              let remove2 = ["флуктуации","аспонтанность", "импульсивность", "персеверации"];
              let rmcontrolfromex = ["импульсивность"];
              let rmMoveFromEx = ["персеверации"];
              let rmDinamicFromEx = ["флуктуации"];
              this.exclude_4 = exclude_4
                .split(/,+/)
                .filter((word:string) => !remove2.includes(word))
                .join(' ');
              let controlProblems = exclude_4.split(/,+/).filter((word:string) => rmcontrolfromex.includes(word)).join(' ');
              if (controlProblems){
                this.control = 'трудностями контроля';
              }
              let move_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmMoveFromEx.includes(word)).join(' ');
              if (move_in_exclude_4){
                this.mobility = 'инертностью психических процессов';
              }
              let dinamic_in_exclude_4 = exclude_4.split(/,+/).filter((word:string) => rmDinamicFromEx.includes(word)).join(' ');
              if (dinamic_in_exclude_4){
                this.sinus = 'флуктуациями';
              }

              break;
            case  'understanding':
              this.text_meaning = 'доступно с незначительной организующей помощью'
              break;
            case  'understanding serial pictures':
              this.causal_link = 'Причинно-следственные связи устанавливает с незначительной организующей помощью';
              break;
            case 'understanding pictures':
              this.pictures_understanding = 'доступно с незначительной организующей помощью';
              break;
            case  'understanding proverbs':
              this.proverbs = 'доступно с незначительной организующей помощью';
              break;
            case  'attention':
              this.attention = item.description.toString();
              break;
            default:
              break;
          }
        }
      });

    }
    if ( this.objectiveBadSymptoms && this.objectiveBadSymptoms.length >0){
      console.log(this.objectiveBadSymptoms)
      let namesArray: any = this.objectiveBadSymptoms.flat(1).map(item => item.name);

      console.log(namesArray);
      namesArray.forEach((name:string) => {
          const item: any = this.objectiveBadSymptoms.flat(1).find(item => item.name === name);
          if (item && item.description) {

            switch (name) {
              case 'dinamicPracsis' :
                this.dinamic_pracsis = item.description.toString();
           /*    let sideLowSymptoms = this.dinamic_pracsis.split(',').filter(item => item.includes('неполное сжатие'));
               if (sideLowSymptoms.length > 0){
                 dinamicLowProblemsArray_bad.push(sideLowSymptoms.toString())
                 console.log(dinamicLowProblemsArray_bad)
               }
               let sideStuckSymptomsToInclude = ['скандированность', 'персеверации', 'трудности переключения с одного движения на другое']
                let sideStuckSymptoms = this.dinamic_pracsis.split(',').filter(item => item.includes(sideStuckSymptomsToInclude.toString()));
                if (sideStuckSymptoms.length >0){
                  dinamicStuckProblems_bad.push(sideStuckSymptoms.toString())
                  console.log(dinamicStuckProblems_bad)
                }
                let sideProgramSymptomsToInclude = ['расширение программы','упрощение программы']
                let program = this.dinamic_pracsis.split(',').filter(item => item.includes(sideProgramSymptomsToInclude.toString()));
                if (program.length >0){
                  programmingActionsProblems_bad.push(program);
                  console.log(programmingActionsProblems_bad)
                }
             //   let dinamic_pracsis = item.description.toString();
              //  let remove = 'персеверации';
             //   this.dinamic_pracsis = dinamic_pracsis.split(remove)*/
                break;
              case 'reciproknaya':
                this.reciprok = item.description.toString();
                break;
              case  'positionsPracsis':
                this.position_pracsis = item.description.toString();
                break;
              case 'grafics':
                this.grafics_pracsis = item.description.toString();
                break;
              case 'hed':
                this.heads_test = item.description.toString();
                break;
              case 'ears_motors':
                this.listen_motor_test = item.description.toString();
                break;
              case 'eyes':
                this.eyes_test = item.description.toString();
                break;
              case 'constructor':
                this.constract_pracsis = item.description.toString();
                break;
              case 'choise_reaction':
                this.choice_reaction = item.description.toString();
                break;
              case 'vision gnosis':
                this.visiual_gnosis = item.description.toString();
                break;
              case 'vision_space gnosis':
                this.visiual_space_gnosis = item.description.toString();
                break;
              case 'vision_symbolic gnosis':
                this.visiual_symbolic_gnosis = item.description.toString();
                break;
              case 'auditory gnosis':
                this.auditional_gnosis = item.description.toString();
                break;
              case 'sensor gnosis':
                this.sensor_gnosis = item.description.toString();
                break;
              case 'emotional gnosis':
                this.emotional_gnosis = item.description.toString();
                break;
              case 'copy gnosis':
                this.copy_gnosis = item.description.toString();
                break;
              case 'vision_space_memory':
                this.visial_space_memory = item.description.toString();
                break;
              case 'vision_memory':
                this.visiual_memory = item.description.toString();
                break;
              case 'audit_memory':
                this.audit_memory = item.description.toString();
                break;
              case 'audit_memory_2_3':
                this.audit_memory_2_3 = item.description.toString();
                break;
              case 'serial counting':
                this.calculating = item.description.toString();
                break;
              case 'solving tasks':
                this.solving_tasks = item.description.toString();
                break;
              case 'solving problems':
                this.solving_problems = item.description.toString();
                break;
              case 'solving analog':
                this.analog = item.description.toString();
                break;
              case 'solving exclude':
                this.exclude_4 = item.description.toString();
                break;
              case  'understanding':
                this.text_meaning = 'Понимание прочитанного текста  доступно  при массированной помощи';
                break;
              case  'understanding serial pictures':
                this.causal_link = 'Причинно-следственные связи устанавливает с массированной помощью';
                break;
              case 'understanding pictures':
                this.pictures_understanding = 'доступно  при массированной помощи';
                break;
              case  'understanding proverbs':
                this.proverbs = 'доступно  при массированной помощи';
                break;
              case  'attention':
                this.attention = item.description.toString();
                break;
              default:
                break;
            }
          }
        });

    }
    if (this.objectiveWorseSymptoms && this.objectiveWorseSymptoms.length >0){
      let namesArray2: any = this.objectiveWorseSymptoms.flat(1).map(item => item.name);
      namesArray2.forEach((name:string) => {
        const item: any = this.objectiveWorseSymptoms.flat(1).find(item => item.name === name);
        if (item) {
          switch (name) {
            case 'dinamicPracsis':
              this.dinamic_pracsis = item.description.toString();
              break;
            case 'reciproknaya':
              this.reciprok = item.description.toString();
              break;
            case  'positionsPracsis':
              this.position_pracsis = item.description.toString();
              break;
            case 'grafics':
              this.grafics_pracsis = item.description.toString();
              break;
            case 'hed':
              this.heads_test = item.description.toString();
              break;
            case 'ears_motors':
              this.listen_motor_test = item.description.toString();
              break;
            case 'eyes':
              this.eyes_test = item.description.toString();
              break;
            case 'constructor':
              this.constract_pracsis = item.description.toString();
              break;
            case 'choise_reaction':
              this.choice_reaction = item.description.toString();
              break;
            case 'vision gnosis':
              this.visiual_gnosis = item.description.toString();
              break;
            case 'vision_space gnosis':
              this.visiual_space_gnosis = item.description.toString();
              break;
            case 'vision_symbolic gnosis':
              this.visiual_symbolic_gnosis = item.description.toString();
              break;
            case 'auditory gnosis':
              this.auditional_gnosis = item.description.toString();
              break;
            case 'sensor gnosis':
              this.sensor_gnosis = item.description.toString();
              break;
            case 'emotional gnosis':
              this.emotional_gnosis = item.description.toString();
              break;
            case 'copy gnosis':
              this.copy_gnosis = item.description.toString();
              break;
            case 'vision_space_memory':
              this.visial_space_memory = item.description.toString();
              break;
            case 'vision_memory':
              this.visiual_memory = item.description.toString();
              break;
            case 'audit_memory':
              this.audit_memory = item.description.toString();
              break;
            case 'audit_memory_2_3':
              this.audit_memory_2_3 = item.description.toString();
              break;
            case 'serial counting':
              this.calculating = item.description.toString();
              break;
            case 'solving tasks':
              this.solving_tasks = item.description.toString();
              break;
            case 'solving problems':
              this.solving_problems = item.description.toString();
              break;
            case 'solving analog':
              this.analog = item.description.toString();
              break;
            case 'solving exclude':
              this.exclude_4 = item.description.toString();
              break;
            case  'understanding':
              this.text_meaning = 'Понимание прочитанного текста не доступно даже при массированной помощи';
              break;
            case  'understanding serial pictures':
              this.causal_link = 'Имеет выраженные трудности при установлении причинно-следвтенных связей';
              break;
            case 'understanding pictures':
              this.pictures_understanding = 'недоступно даже с массированной помощью';
              break;
            case  'understanding proverbs':
              this.proverbs = 'недоступно даже с массированной помощью';
              break;
            case  'attention':
              this.attention = item.description.toString();
              break;
            default:
              break;
          }
        }
      });
    }


}
  saveSolutions(resume: string, recommends: string): void {
      this.resume = resume;
      this.recommends = recommends;
      this.isRefresh = true;
      this.router.navigate(['raport'])
  }

  saveAndSendRequestToDB(){
    this.reportService.saveReport(this.userId, this.solution)
      .subscribe(data => {
          if (data === undefined){
            throw new Error("Данные не удалось записать")
          }
      });
    console.log("Success");
    this.router.navigate(['/']);
  }

  }


