import { Clock } from 'lucide-react'

const OpeningBalance = ({ party, errors, handleChange }) => {
  return (
    <div className="tab-pane">
      <div className="opening-balance-section">
        <div className="section-title">
          <Clock size={18} />
          <span>Opening Balances</span>
        </div>

        <div className="balance-grid">
          {/* Opening Amount */}
          <div className="balance-card">
            <h4>Opening Amount</h4>
            <div className="balance-inputs">
              <div className="balance-group">
                <label>Debit</label>
                <input className={errors.openingAmountDebit ? 'input-error' : ''} type="text" value={party.openingAmountDebit} onChange={handleChange('openingAmountDebit')} />
                {errors.openingAmountDebit && <span className="error-msg">{errors.openingAmountDebit}</span>}
              </div>
              <div className="balance-group">
                <label>Credit</label>
                <input className={errors.openingAmountCredit ? 'input-error' : ''} type="text" value={party.openingAmountCredit} onChange={handleChange('openingAmountCredit')} />
                {errors.openingAmountCredit && <span className="error-msg">{errors.openingAmountCredit}</span>}
              </div>
            </div>
          </div>

          {/* Gold Fine */}
          <div className="balance-card">
            <h4>Gold Fine(gm)</h4>
            <div className="balance-inputs">
              <div className="balance-group">
                <label>Debit</label>
                <input className={errors.goldFineDebit ? 'input-error' : ''} type="text" value={party.goldFineDebit} onChange={handleChange('goldFineDebit')} />
                {errors.goldFineDebit && <span className="error-msg">{errors.goldFineDebit}</span>}
              </div>
              <div className="balance-group">
                <label>Credit</label>
                <input className={errors.goldFineCredit ? 'input-error' : ''} type="text" value={party.goldFineCredit} onChange={handleChange('goldFineCredit')} />
                {errors.goldFineCredit && <span className="error-msg">{errors.goldFineCredit}</span>}
              </div>
            </div>
          </div>

          {/* Silver Fine */}
          <div className="balance-card">
            <h4>Silver Fine (gm)</h4>
            <div className="balance-inputs">
              <div className="balance-group">
                <label>Debit</label>
                <input className={errors.silverFineDebit ? 'input-error' : ''} type="text" value={party.silverFineDebit} onChange={handleChange('silverFineDebit')} />
                {errors.silverFineDebit && <span className="error-msg">{errors.silverFineDebit}</span>}
              </div>
              <div className="balance-group">
                <label>Credit</label>
                <input className={errors.silverFineCredit ? 'input-error' : ''} type="text" value={party.silverFineCredit} onChange={handleChange('silverFineCredit')} />
                {errors.silverFineCredit && <span className="error-msg">{errors.silverFineCredit}</span>}
              </div>
            </div>
          </div>
        </div>

        <div className="remarks-group">
          <label htmlFor="remarks">Remarks</label>
          <textarea id="remarks" rows="3" placeholder="Enter any additional notes....." value={party.remarks} onChange={handleChange('remarks')}></textarea>
        </div>
      </div>
    </div>
  )
}

export default OpeningBalance
