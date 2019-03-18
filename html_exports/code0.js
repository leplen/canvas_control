gdjs.MainBoardCode = {};
gdjs.MainBoardCode.GDPenguinObjects1= [];
gdjs.MainBoardCode.GDPenguinObjects2= [];
gdjs.MainBoardCode.GDBackgroundObjects1= [];
gdjs.MainBoardCode.GDBackgroundObjects2= [];
gdjs.MainBoardCode.GDrsqObjects1= [];
gdjs.MainBoardCode.GDrsqObjects2= [];

gdjs.MainBoardCode.conditionTrue_0 = {val:false};
gdjs.MainBoardCode.condition0IsTrue_0 = {val:false};
gdjs.MainBoardCode.condition1IsTrue_0 = {val:false};


gdjs.MainBoardCode.mapOfGDgdjs_46MainBoardCode_46GDrsqObjects1Objects = Hashtable.newFrom({"rsq": gdjs.MainBoardCode.GDrsqObjects1});gdjs.MainBoardCode.eventsList0xb0cf8 = function(runtimeScene) {

{


gdjs.MainBoardCode.condition0IsTrue_0.val = false;
{
gdjs.MainBoardCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "p");
}if (gdjs.MainBoardCode.condition0IsTrue_0.val) {
gdjs.MainBoardCode.GDPenguinObjects1.createFrom(runtimeScene.getObjects("Penguin"));
gdjs.MainBoardCode.GDrsqObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MainBoardCode.mapOfGDgdjs_46MainBoardCode_46GDrsqObjects1Objects, (( gdjs.MainBoardCode.GDPenguinObjects1.length === 0 ) ? 0 :gdjs.MainBoardCode.GDPenguinObjects1[0].getPointX("")), (( gdjs.MainBoardCode.GDPenguinObjects1.length === 0 ) ? 0 :gdjs.MainBoardCode.GDPenguinObjects1[0].getPointY("")), "Char");
}}

}


}; //End of gdjs.MainBoardCode.eventsList0xb0cf8


gdjs.MainBoardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.MainBoardCode.GDPenguinObjects1.length = 0;
gdjs.MainBoardCode.GDPenguinObjects2.length = 0;
gdjs.MainBoardCode.GDBackgroundObjects1.length = 0;
gdjs.MainBoardCode.GDBackgroundObjects2.length = 0;
gdjs.MainBoardCode.GDrsqObjects1.length = 0;
gdjs.MainBoardCode.GDrsqObjects2.length = 0;

gdjs.MainBoardCode.eventsList0xb0cf8(runtimeScene);
return;
}
gdjs['MainBoardCode'] = gdjs.MainBoardCode;
