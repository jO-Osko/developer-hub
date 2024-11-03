import React from "react";
import CopyButton from "../CopyButton"; // Assuming the CopyButton component is in the same directory
import tableData from "../../../automations/anchor_feeds.json";

const AnchorFeeds = () => {
  return (
    <table className="data-table">
      <thead>
        <tr className="table-header">
          <th>Feed Name</th>
          <th>Feed ID</th>
          <th>Base Asset</th>
          <th>Decimals</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {tableData.map((row, index) => (
          <tr key={index} className="table-row">
            <td className="regular-font">{row.feed_name}</td>
            <td className="feed-id mono-font">
              <div className="feed-id-container">
                <span className="feed-id-text">{row.feed_id}</span>
                <CopyButton textToCopy={row.feed_id} />
              </div>
            </td>
            <td className="regular-font">{row.base_asset}</td>
            <td className="regular-font">{row.decimals}</td>
            <td className="regular-font">{row.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AnchorFeeds;