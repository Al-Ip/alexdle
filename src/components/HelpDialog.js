import React from 'react'

export default function HelpDialog({onMenuClose}) {
  return (
    <div className='help-dialog' >
        <div className='help-dialog_content'>
            <header>
                <h1>HOW TO PLAY</h1>
                <button type="button" className="help-dialog_content_close" data-testid="close" onClick={ onMenuClose }>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" className="game-icon" data-testid="icon-close">
                        <path fill="#000000" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                    </svg>
                </button>
            </header>
            <div className='help-dialog_container'>
                <section className='help-dialog_section'>
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
                                <div data-testid='pills-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>l</div>
                                </div>
                                <div data-testid='pills-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>l</div>
                                </div>
                                <div data-testid='pills-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>s</div>
                                </div>
                                <p>The letter <strong>I</strong> is in the word but in the wrong spot.</p>
                            </div>
                            <div aria-label='vague' className='help-dialog_example'>
                                <div data-testid='vague-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>v</div>
                                </div>
                                <div data-testid='vague-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>a</div>
                                </div>
                                <div data-testid='vague-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>g</div>
                                </div>
                                <div data-testid='vague-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='absent' data-animation='idle' data-testid='tile'>u</div>
                                </div>
                                <div data-testid='vague-letter' className='help-dialog_tileContainer'>
                                    <div className='tile-module_tile' data-state='tbd' data-animation='idle' data-testid='tile'>e</div>
                                </div>
                                <p>The letter <strong>U</strong> is not in the word in any spot.</p>
                            </div>
                        </div>
                        <p><strong>A new ALEXDLE can be played after every refresh of the page!</strong></p>
                    </div>
                </section>
            </div>
        </div>
    </div>
  )
}
