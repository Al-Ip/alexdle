import React from 'react'

export default function HelpDialog() {
  return (
    <div className='help-dialog'>
        <div className='help-dialog_content'>
            <header></header>
            <div className='help-dialog_container'>
                <section className='help-dialog_section'>-module_example
                    <div className='help-dialog_instructions'>
                        <p>Guess the <strong>Alexdle</strong> in six tries.</p>
                        <p>Each guess must be a valid five-letter word. Hit the enter button to submit.</p>
                        <p>After each guess, the color of the tiles will change to show how close your guess was to the word.</p>
                        <div className='help-dialog_examples'>
                            <p><strong>Examples</strong></p>
                            <div aria-label='weary' className='help-dialog_example'>
                                <div data-testid='weary-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='correct' data-animation='idle' data-testid='tile'>w</div>
                                </div>
                                <div data-testid='weary-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>e</div>
                                </div>
                                <div data-testid='weary-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>a</div>
                                </div>
                                <div data-testid='weary-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>r</div>
                                </div>
                                <div data-testid='weary-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>y</div>
                                </div>
                                <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>
                            </div>
                            <div aria-label='pills' className='help-dialog_example'>
                                <div data-testid='pills-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>p</div>
                                </div>
                                <div data-testid='pills-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='present' data-animation='idle' data-testid='tile'>i</div>
                                </div>
                                <div data-testid='pills-letter' class='help-dialog_tileContainer'>
                                    <div class='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>l</div>
                                </div>
                                <div data-testid='pills-letter' class='help-dialog_tileContainer'>
                                    <div class='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>l</div>
                                </div>
                                <div data-testid='pills-letter' class='help-dialog_tileContainer'>
                                    <div class='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>s</div>
                                </div>
                                <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
                            </div>
                            <div aria-label='vague' class='help-dialog_example'>
                                <div data-testid='vague-letter' class='help-dialog_tileContainer'>
                                    <div class='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>v</div>
                                </div>
                                <div data-testid='vague-letter' class='help-dialog_tileContainer'>
                                    <div class='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>a</div>
                                </div>
                                <div data-testid='vague-letter' class='help-dialog_tileContainer'>
                                    <div class='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>g</div>
                                </div>
                                <div data-testid='vague-letter' class='help-dialog_tileContainer'>
                                    <div class='tile-module_tile' data-state='absent' data-animation='idle' data-testid='tile'>u</div>
                                </div>
                                <div data-testid='vague-letter' class='help-dialog_tileContainer'>
                                    <div class='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>e</div>
                                </div>
                                <p>The letter <strong>U</strong> is not in the word in any spot.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}
