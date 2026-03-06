import { useState, useEffect, useRef } from 'react';
import * as Blockly from 'blockly';
import * as He from 'blockly/msg/he';

// Set Blockly to Hebrew
Blockly.setLocale(He);

// Define custom Scratch-like blocks
// --- MOTION ---
Blockly.Blocks['motion_movesteps'] = {
  init: function() {
    this.appendValueInput("STEPS")
        .setCheck("Number")
        .appendField("זוז");
    this.appendDummyInput()
        .appendField("צעדים");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4C97FF');
    this.setTooltip("מזיז את הדמות מספר צעדים");
  }
};

Blockly.Blocks['motion_turnright'] = {
  init: function() {
    this.appendValueInput("DEGREES")
        .setCheck("Number")
        .appendField("הסתובב ימינה ↻");
    this.appendDummyInput()
        .appendField("מעלות");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4C97FF');
  }
};

Blockly.Blocks['motion_turnleft'] = {
  init: function() {
    this.appendValueInput("DEGREES")
        .setCheck("Number")
        .appendField("הסתובב שמאלה ↺");
    this.appendDummyInput()
        .appendField("מעלות");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4C97FF');
  }
};

Blockly.Blocks['motion_gotoxy'] = {
  init: function() {
    this.appendValueInput("X")
        .setCheck("Number")
        .appendField("קפוץ אל x:");
    this.appendValueInput("Y")
        .setCheck("Number")
        .appendField("y:");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#4C97FF');
  }
};

// --- LOOKS ---
Blockly.Blocks['looks_sayforsecs'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("אמור");
    this.appendValueInput("SECS")
        .setCheck("Number")
        .appendField("למשך");
    this.appendDummyInput()
        .appendField("שניות");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
  }
};

Blockly.Blocks['looks_say'] = {
  init: function() {
    this.appendValueInput("MESSAGE")
        .setCheck("String")
        .appendField("אמור");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
  }
};

Blockly.Blocks['looks_show'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("הצג");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
  }
};

Blockly.Blocks['looks_hide'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("הסתר");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#9966FF');
  }
};

// --- EVENTS ---
Blockly.Blocks['events_whenflagclicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("כאשר לוחצים על 🟢");
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
    this.setTooltip("מתחיל את התוכנית");
  }
};

Blockly.Blocks['events_whenkeypressed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("כאשר נלחץ מקש")
        .appendField(new Blockly.FieldDropdown([
          ["רווח", "SPACE"],
          ["חץ ימני", "RIGHT"],
          ["חץ שמאלי", "LEFT"],
          ["חץ עליון", "UP"],
          ["חץ תחתון", "DOWN"],
          ["a", "A"],
          ["b", "B"]
        ]), "KEY");
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
  }
};

Blockly.Blocks['events_whenthisspriteclicked'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("כאשר לוחצים על דמות זו");
    this.setNextStatement(true, null);
    this.setColour('#FFBF00');
  }
};

// --- CONTROL ---
Blockly.Blocks['control_wait'] = {
  init: function() {
    this.appendValueInput("DURATION")
        .setCheck("Number")
        .appendField("חכה");
    this.appendDummyInput()
        .appendField("שניות");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFAB19');
  }
};

Blockly.Blocks['control_repeat'] = {
  init: function() {
    this.appendValueInput("TIMES")
        .setCheck("Number")
        .appendField("חזור");
    this.appendDummyInput()
        .appendField("פעמים");
    this.appendStatementInput("SUBSTACK")
        .setCheck(null);
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#FFAB19');
  }
};

Blockly.Blocks['control_forever'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("לעולמים");
    this.appendStatementInput("SUBSTACK")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setColour('#FFAB19');
  }
};

const toolbox = {
  kind: 'categoryToolbox',
  contents: [
    {
      kind: 'category',
      name: 'אירועים',
      colour: '#FFBF00',
      contents: [
        { kind: 'block', type: 'events_whenflagclicked' },
        { kind: 'block', type: 'events_whenkeypressed' },
        { kind: 'block', type: 'events_whenthisspriteclicked' }
      ]
    },
    {
      kind: 'category',
      name: 'תנועה',
      colour: '#4C97FF',
      contents: [
        { 
          kind: 'block', 
          type: 'motion_movesteps',
          inputs: {
            STEPS: {
              shadow: { type: 'math_number', fields: { NUM: 10 } }
            }
          }
        },
        { 
          kind: 'block', 
          type: 'motion_turnright',
          inputs: {
            DEGREES: {
              shadow: { type: 'math_number', fields: { NUM: 15 } }
            }
          }
        },
        { 
          kind: 'block', 
          type: 'motion_turnleft',
          inputs: {
            DEGREES: {
              shadow: { type: 'math_number', fields: { NUM: 15 } }
            }
          }
        },
        { 
          kind: 'block', 
          type: 'motion_gotoxy',
          inputs: {
            X: { shadow: { type: 'math_number', fields: { NUM: 0 } } },
            Y: { shadow: { type: 'math_number', fields: { NUM: 0 } } }
          }
        }
      ]
    },
    {
      kind: 'category',
      name: 'מראה',
      colour: '#9966FF',
      contents: [
        { 
          kind: 'block', 
          type: 'looks_sayforsecs',
          inputs: {
            MESSAGE: { shadow: { type: 'text', fields: { TEXT: 'שלום!' } } },
            SECS: { shadow: { type: 'math_number', fields: { NUM: 2 } } }
          }
        },
        { 
          kind: 'block', 
          type: 'looks_say',
          inputs: {
            MESSAGE: { shadow: { type: 'text', fields: { TEXT: 'שלום!' } } }
          }
        },
        { kind: 'block', type: 'looks_show' },
        { kind: 'block', type: 'looks_hide' }
      ]
    },
    {
      kind: 'category',
      name: 'בקרה',
      colour: '#FFAB19',
      contents: [
        { 
          kind: 'block', 
          type: 'control_wait',
          inputs: {
            DURATION: { shadow: { type: 'math_number', fields: { NUM: 1 } } }
          }
        },
        { 
          kind: 'block', 
          type: 'control_repeat',
          inputs: {
            TIMES: { shadow: { type: 'math_number', fields: { NUM: 10 } } }
          }
        },
        { kind: 'block', type: 'control_forever' },
        { kind: 'block', type: 'controls_if' },
        { kind: 'block', type: 'controls_ifelse' }
      ]
    },
    {
      kind: 'category',
      name: 'לוגיקה',
      colour: '#5C81A6',
      contents: [
        { kind: 'block', type: 'logic_compare' },
        { kind: 'block', type: 'logic_operation' },
        { kind: 'block', type: 'logic_negate' },
        { kind: 'block', type: 'logic_boolean' },
      ],
    },
    {
      kind: 'category',
      name: 'מתמטיקה',
      colour: '#5C68A6',
      contents: [
        { kind: 'block', type: 'math_number' },
        { kind: 'block', type: 'math_arithmetic' },
        { kind: 'block', type: 'math_single' },
        { kind: 'block', type: 'math_random_int' },
      ],
    },
    {
      kind: 'category',
      name: 'טקסט',
      colour: '#5CA68D',
      contents: [
        { kind: 'block', type: 'text' },
        { kind: 'block', type: 'text_print' },
      ],
    },
    {
      kind: 'category',
      name: 'משתנים',
      colour: '#A65C81',
      custom: 'VARIABLE',
    },
    {
      kind: 'category',
      name: 'פונקציות',
      colour: '#9A5CA6',
      custom: 'PROCEDURE',
    },
  ],
};

export default function EditorPage() {
  const [isDark, setIsDark] = useState(false);
  const blocklyDiv = useRef<HTMLDivElement>(null);
  const workspaceRef = useRef<Blockly.WorkspaceSvg | null>(null);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  useEffect(() => {
    if (blocklyDiv.current && !workspaceRef.current) {
      workspaceRef.current = Blockly.inject(blocklyDiv.current, {
        toolbox: toolbox,
        rtl: true,
        trashcan: true,
        move: {
          scrollbars: true,
          drag: true,
          wheel: true,
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 1.0,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.2,
        },
      });
    }

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []);

  const toggleDarkMode = () => {
    const willBeDark = !isDark;
    setIsDark(willBeDark);
    if (willBeDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark overflow-hidden">
      {/* Editor Header */}
      <header className="bg-primary text-white h-14 flex items-center justify-between px-4 shrink-0 shadow-md z-20">
        <div className="flex items-center gap-4">
          <button className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <span className="material-symbols-outlined">home</span>
          </button>
          <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-md">
            <span className="material-symbols-outlined text-sm">language</span>
            <span className="text-sm font-bold">עברית</span>
          </div>
          <div className="flex items-center gap-4 text-sm font-bold ml-4">
            <button className="hover:text-white/80 transition-colors">קובץ</button>
            <button className="hover:text-white/80 transition-colors">עריכה</button>
            <button className="hover:text-white/80 transition-colors">מדריכים</button>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-4">
          <input 
            type="text" 
            defaultValue="פרויקט ללא שם" 
            className="w-full bg-white/10 border border-white/20 text-white placeholder-white/60 rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-accent-orange focus:bg-white/20 transition-all font-bold text-center"
          />
        </div>

        <div className="flex items-center gap-3">
          <button className="text-white/80 hover:text-white p-1 flex items-center ml-2" onClick={toggleDarkMode}>
            <span className="material-symbols-outlined">{isDark ? 'light_mode' : 'dark_mode'}</span>
          </button>
          <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-1.5 rounded-md font-bold text-sm transition-colors flex items-center gap-2">
            <span className="material-symbols-outlined text-sm">folder</span>
            הפרויקטים שלי
          </button>
          <button className="bg-accent-orange hover:bg-orange-500 text-white px-4 py-1.5 rounded-md font-bold text-sm transition-colors shadow-sm">
            שתף
          </button>
        </div>
      </header>

      {/* Main Editor Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Panel: Stage & Sprites */}
        <div className="w-1/3 min-w-[300px] max-w-[500px] flex flex-col border-l border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 z-10 shadow-[2px_0_10px_rgba(0,0,0,0.05)]">
          
          {/* Stage Area */}
          <div className="p-2 flex flex-col h-1/2 min-h-[300px]">
            <div className="flex justify-between items-center mb-2 px-1">
              <div className="flex gap-2">
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"><span className="material-symbols-outlined">fullscreen</span></button>
                <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"><span className="material-symbols-outlined">grid_on</span></button>
              </div>
              <div className="flex gap-2">
                <button className="text-green-500 hover:text-green-600 transition-colors"><span className="material-symbols-outlined text-3xl">play_arrow</span></button>
                <button className="text-red-500 hover:text-red-600 transition-colors"><span className="material-symbols-outlined text-3xl">stop</span></button>
              </div>
            </div>
            <div className="flex-1 bg-white border-2 border-slate-200 dark:border-slate-700 rounded-lg relative overflow-hidden shadow-inner flex items-center justify-center">
              {/* The actual stage canvas would go here */}
              <div className="text-center">
                <span className="material-symbols-outlined text-6xl text-slate-300 dark:text-slate-600">pets</span>
                <p className="text-slate-400 dark:text-slate-500 font-bold mt-2">במה</p>
              </div>
            </div>
          </div>

          {/* Sprites Area */}
          <div className="flex-1 flex flex-col border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-2 overflow-hidden">
            <div className="flex gap-2 mb-2">
              <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md p-2 flex flex-col gap-2 shadow-sm">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 w-12">דמות</span>
                  <input type="text" defaultValue="חתול 1" className="flex-1 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary" />
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">X</span>
                    <input type="number" defaultValue="0" className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">Y</span>
                    <input type="number" defaultValue="0" className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">גודל</span>
                    <input type="number" defaultValue="100" className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <span className="text-xs font-bold text-slate-500 dark:text-slate-400">כיוון</span>
                    <input type="number" defaultValue="90" className="w-full bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded px-2 py-1 text-xs font-bold focus:outline-none focus:ring-1 focus:ring-primary" />
                  </div>
                </div>
              </div>
              <div className="w-20 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md p-2 flex flex-col items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-slate-500 dark:text-slate-400 mb-1">במה</span>
                <div className="w-12 h-10 border border-slate-200 dark:border-slate-700 rounded bg-white flex items-center justify-center">
                  <span className="material-symbols-outlined text-slate-300 text-xl">image</span>
                </div>
              </div>
            </div>
            
            <div className="flex-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-md p-2 overflow-y-auto flex flex-wrap gap-2 content-start shadow-inner">
              {/* Sprite Item */}
              <div className="w-20 h-24 border-2 border-primary rounded-md flex flex-col items-center justify-center cursor-pointer bg-primary/5 relative">
                <button className="absolute -top-2 -right-2 bg-slate-200 dark:bg-slate-700 text-slate-500 rounded-full w-5 h-5 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors shadow-sm">
                  <span className="material-symbols-outlined text-[12px]">close</span>
                </button>
                <span className="material-symbols-outlined text-4xl text-slate-600 dark:text-slate-300">pets</span>
                <span className="text-xs font-bold mt-2 text-primary">חתול 1</span>
              </div>
              
              {/* Add Sprite Button */}
              <div className="w-20 h-24 border-2 border-dashed border-slate-300 dark:border-slate-600 rounded-md flex flex-col items-center justify-center cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-700 group-hover:bg-primary/10 flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors">add</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Panel: Block Palette */}
        <div className="flex-1 flex flex-col relative bg-slate-100 dark:bg-slate-800">
          {/* Workspace Tabs */}
          <div className="h-10 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700 flex px-2 z-10 shadow-sm">
            <button className="px-6 py-2 bg-slate-100 dark:bg-slate-800 text-primary dark:text-blue-400 font-bold rounded-t-lg border-t border-l border-r border-slate-200 dark:border-slate-700 flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-sm">code</span>
              קוד
            </button>
            <button className="px-6 py-2 text-slate-500 dark:text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-t-lg transition-colors flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-sm">palette</span>
              תלבושות
            </button>
            <button className="px-6 py-2 text-slate-500 dark:text-slate-400 font-bold hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-t-lg transition-colors flex items-center gap-2 mt-1">
              <span className="material-symbols-outlined text-sm">volume_up</span>
              צלילים
            </button>
          </div>

          {/* Workspace Area */}
          <div className="flex-1 relative overflow-hidden" ref={blocklyDiv}>
          </div>
        </div>

      </div>
    </div>
  );
}
