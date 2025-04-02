export default function UserNew() {
  return (
    <div>
      <div>
        <span></span>
      </div>
      <div>
        <div>
          <div>Username</div>
          <input type="text" name="username" id="username" />
        </div>
        <div>
          <div>Address</div>
          <input type="text" />
        </div>
        <div>
          <div>Role</div>
          <select name="role" id="role">
            <option value="dev">Developer</option>
            <option value="ba">Business Analyst</option>
            <option value="pm">Project Manager</option>
            <option value="tester">Tester</option>
          </select>
        </div>
        <div>
          <div>Company</div>
          <select name="role" id="role">
            <option value="vti">VTI Group</option>
            <option value="fsoft">FPT Software</option>
            <option value="cmc">CMC Global</option>
            <option value="viettel">Viettel</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  );
}
