export const Note = ({ message, onDelete, onEdit }: Props) => {
  return (
    <div className="tile is-3 p-2 note">
      <div
        className="notification is-warning is-fullwidth"
        style={{ overflowY: "auto" }}
      >
        <button type="button" className="delete" onClick={onDelete}></button>
        {message
          .split("\n")
          .map((text, index) =>
            text === "" ? (
              <p key={index} style={{ height: 16 }} />
            ) : (
              <p key={index}>{text}</p>
            )
          )}
        <div>
          <button
            className="button is-ghost px-0 is-small"
            type="button"
            onClick={onEdit}
          >
            Edit note
          </button>
        </div>
      </div>
    </div>
  );
};

interface Props {
  message: string;
  onDelete: () => void;
  onEdit: () => void;
}
