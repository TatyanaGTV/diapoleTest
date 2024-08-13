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
  badSymptoms: [] | any = [];
  userId: string = '';
  worseSymptoms: [] = [];
  objectiveNotBadSymptoms: GettingPropertyType  = [];

  objectiveBadSymptoms: GettingPropertyType =  [];
  objectiveWorseSymptoms: GettingPropertyType  = [];
  complaints: string = '';
  med_anamnesis: string = '';
  soc_anamnesis: string = '';
  adequancy: string = 'адекватно ситуации';
  adequancyDescription: [] = [];
  contact: string = 'доступен';
  conversation: string = 'охотно';
  speechInitiation: string = '';
  distance: string = '';
  orientation: string = 'Ориентация в мете, времени, собственной личности сохранна';
  orientationDescription = [];
  interest: string = 'Заинтересован в результатах выполнения заданий';
  reaction: string = 'живые, адекватные ';
  criticality: string = 'Критика сохранна';
  expert_motivation: string = 'формируется';
  emotional_state: string = '';
  emotional_stateDescription = [];
  instructionUnderstanding: string = 'усваивает чаще с первого раза, самостоятельно удерживает в процессе выполнения заданий';
  tasks: string = 'выполняет все и в полном объеме';
  help: string = '';
  helpDescription = [];
  helpAccepting: string = '';
  workTempo: string = 'нормативный';
  workDinamic: string = 'стабильная';
  generalArray = [
    this.adequancy, this.adequancyDescription, this.contact, this.conversation, this.speechInitiation,
  ]
  nameOfUser: string | null = '';
  birthdayOfUser: string | null = '';
  examinationDate: string | null = '';
  visiual_gnosis: string = '';
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
    let badSymptoms = localStorage.getItem('bad')
    console.log(typeof badSymptoms)
    if (badSymptoms && this.badSymptoms) {
      this.badSymptoms = JSON.parse(badSymptoms)
    }
    let worseSymptoms: string | null = localStorage.getItem('worse')
    if (worseSymptoms) {
      this.worseSymptoms = JSON.parse(worseSymptoms)
    }
    if (this.badSymptoms || this.worseSymptoms) {
      this.giveValuesForMakingRaport();
    }
    let objective_not_badSymptoms = localStorage.getItem('notBadResults');
    console.log(objective_not_badSymptoms);
    if (objective_not_badSymptoms) {
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
      if (dinamicProblems){
        this.switchOfMovements = 'трудностями переключения'
        console.log(  this.switchOfMovements)
      }
      let kineticProblemsMinus = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'персеверации' ||  problem.trimEnd() === 'скандированность'
        || problem.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
      if (kineticProblemsMinus){
        this.movementsDifficaltiesMinus = 'трудностями переключения'
        console.log(  this.movementsDifficaltiesMinus)
      }
      let kineticProblemsPlus = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'лишние импульсы' || problem.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
      if ( kineticProblemsPlus){
        this.movementsDifficaltiesPlus = 'трудностями переключения'
        console.log(  this.movementsDifficaltiesPlus)
      }

      let activateProblemsSlow = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'инактивность' || problem.trimEnd() === 'аспонтанность'  );
      if (activateProblemsSlow){
        this.mobility = 'инертностью психических процессов'
      }
      let controlProblems = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'эхопраксия' || problem.trimEnd() === 'зеркальность' || problem.trimEnd() === 'импульсивность' || problem.trimEnd() === 'псевдоагнозии' || problem.trimEnd() === ' конфабуляции');
      if (controlProblems){
        this.control = 'трудностями контроля'
        console.log( this.control)
      }
      let activateProblemsMinus = descriptionsFromNotBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'истощаемость');
      if (activateProblemsMinus){
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
        this.mentalProgramming2 = 'на уровне программирования психической деятельности'
        console.log( this.programming)
      }
      let programLogicProblems = descriptionsFromBadSymptomsArr_flatted.filter(item =>  item.trimEnd() === 'трудности переноса' || item.trimEnd() === 'исключает по ситуативному признаку');
      console.log( programLogicProblems);
      if ( programLogicProblems.length >= 1){
        this.logicProgramming = 'характеризуется недостаточностью в звене программировани психической деятельности'
        console.log( this.programming)
      }
      let dinamicProblems = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) =>  problem.trimEnd() === 'трудности переключения с одного движения на другое' || problem.trimEnd() === 'с отрывом руки от листа'
        || problem.trimEnd() === 'поочередное выполнение' || problem.trimEnd() === 'выполнение с отставанием одной руки' || problem.trimEnd() === 'трудности переключения с одной позы на другую');
      if (dinamicProblems.length >= 1){
        this.switchOfMovements = 'трудностями переключения'
        console.log(  this.switchOfMovements)
      }
      let kineticProblemsMinus = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'персеверации' ||  problem.trimEnd() === 'скандированность'
        || problem.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
      if (kineticProblemsMinus.length >= 1){
        this.movementsDifficaltiesMinus = 'трудностями переключения'
        console.log(  this.switchOfMovements)
      }
      let kineticProblemsPlus = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'лишние импульсы' || problem.trimEnd() === 'трудности воспроизведения акцентированных ритмов');
      if ( kineticProblemsPlus.length >= 1){
        this.movementsDifficaltiesPlus = 'трудностями переключения'
        console.log(  this.switchOfMovements)
      }

      let activateProblemsSlow = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'инактивность' || problem.trimEnd() === 'аспонтанность'  );
      if (activateProblemsSlow.length >= 1){
        this.mobility2 = 'выраженной инертностью психических процессов'
      }
      let controlProblems = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'эхопраксия' || problem.trimEnd() === 'зеркальность' || problem.trimEnd() === 'импульсивность'
        || problem.trimEnd() === 'псевдоагнозии' || problem.trimEnd() === ' конфабуляции');
      if (controlProblems.length >= 1){
        this.control2 = 'трудностями контроля'
        console.log( this.control2)
      }
      let activateProblemsMinus = descriptionsFromBadSymptomsArr_flatted.filter((problem: string) => problem.trimEnd() === 'истощаемость');
      if (activateProblemsMinus.length >= 1){
        this.minusMobility = 'истощаемостью'
        console.log( this.minusMobility)
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
    if (this.badSymptoms) {
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('contact')
        return this.contact = 'доступен частично. Контакт неустойчивый';
      });
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('entranceToConversation')
        return this.conversation = 'неохотно';
      });
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('entranceToConversation')
        return this.speechInitiation = 'снижена';
      });
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('orientation')
        return this.orientation = 'Общая осведомленность снижена';
      });
      let orientationItem = this.badSymptoms.find((a: PropertyType) => a.name === 'orientation')
      if (orientationItem) {
        this.orientationDescription = orientationItem.description.toString().toLowerCase();
      }


      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('criticality')
        return this.criticality = 'Критичность снижена';
      });
      let badAdequancy = this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('adequancy')
        return this.adequancy = 'неадекватно';
      });
      console.log(badAdequancy) //подумать гла взять данные для нарушения дистанции
      let adequancyItem = this.badSymptoms.find((item: PropertyType) => item.name === 'adequancy')
      if (adequancyItem) {
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
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('following instructions')
        return this.instructionUnderstanding = 'усваивает со 2-го-3-го раза с развернутым разъяснением';
      });
      this.badSymptoms.find((a: PropertyType) => {
        a.hasOwnProperty('doing tasks')
        return this.tasks = 'выполняет не все и не в полном объеме';
      });
      let helpItem = this.badSymptoms.find((a: PropertyType) => a.name === 'accepting help')
      if (helpItem) {
        this.helpDescription = helpItem.description.toString();
      }

      let workTempo = this.badSymptoms.find((a: PropertyType) => a.name === 'perfomance');
      if (workTempo && workTempo.descriptionTempo) {
        this.workTempo = workTempo.descriptionTempo.toString();
      }
      let workDinamic = this.badSymptoms.find((a: PropertyType) => a.name === 'perfomance');
      if (workDinamic && workDinamic.descriptionDinamic)
        this.workDinamic = workDinamic.descriptionDinamic.toString();
    }
    // }
    if (this.worseSymptoms) {
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('orientation')
        return this.orientation = 'Дезориентирован';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('criticality')
        return this.criticality = 'Критичность резко снижена';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('adequancy')
        return this.adequancy = 'неадекватно';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('exportMotivation')
        return this.expert_motivation = 'не формируется';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('following instructions')
        return this.instructionUnderstanding = ' не усваивает ';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('doing tasks')
        return this.tasks = 'не может выпонить даже с массированной помощью';
      });
      this.worseSymptoms.find((a: {}) => {
        a.hasOwnProperty('accepting help')
        return this.helpAccepting = 'не принимает';
      });
    }
    if ( this.objectiveBadSymptoms){
      console.log(this.objectiveBadSymptoms)
      let namesArray: any = this.objectiveBadSymptoms.flat(1).map(item => item.name);

      console.log(namesArray);
      namesArray.forEach((name:string) => {
          const item: any = this.objectiveBadSymptoms.flat(1).find(item => item.name === name);
          if (item && item.description) {
            switch (name) {
              case 'dinamicPracsis' :
                let dinamic_pracsis = item.description.toString();
                let remove = 'персеверации';
                this.dinamic_pracsis = dinamic_pracsis.split(remove)
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
    if (this.objectiveWorseSymptoms){
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
  if ( this.objectiveNotBadSymptoms){
    let namesArray3: any = this.objectiveNotBadSymptoms.flat(1).map(item => item.name);

    console.log(namesArray3);
    namesArray3.forEach((name:string) => {
      const item: any = this.objectiveNotBadSymptoms.flat(1).find(item => item.name === name);
      if (item) {
        switch (name) {
          case 'dinamicPracsis':
            let dinamic_pracsis = item.description.toString();
            let remove = 'персеверации';
            this.dinamic_pracsis = dinamic_pracsis.split(remove)
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
              this.attention = 'флуктуациями';
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
              this.attention = 'флуктуациями';
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
              this.attention = 'флуктуациями';
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
              this.attention = 'флуктуациями';
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
              this.attention = 'флуктуациями';
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


